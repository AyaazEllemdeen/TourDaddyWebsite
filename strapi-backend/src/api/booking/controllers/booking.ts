import { Context } from "koa";
import axios from "axios";

const API_KEY = "ee733bd95f124758807d221055c06a5c";

export default {
    async find(ctx: Context) {
        try {
            // Fetch all category IDs
            const fetchAllCategoryIds = async (): Promise<number[]> => {
                const url = `https://api.rezdy.com/v1/categories`;
                const response = await axios.get(url, { params: { apiKey: API_KEY } });

                const categories = response.data.categories || [];
                return categories.map((category: any) => category.id); // Extract category IDs
            };

            // Fetch all product codes for a specific category
            const fetchCategoryProductCodes = async (categoryId: number): Promise<string[]> => {
                const url = `https://api.rezdy.com/v1/categories/${categoryId}/products`;
                const response = await axios.get(url, { params: { apiKey: API_KEY } });

                const products = response.data.products || [];
                return products.map((product: any) => product.productCode); // Extract product codes
            };

            // Fetch all product details, including images specific to the product
            const fetchProductDetails = async (productCode: string) => {
                const url = `https://api.rezdy.com/v1/products/${productCode}`;
                const response = await axios.get(url, { params: { apiKey: API_KEY } });

                const product = response.data.product || {};
                const priceOptions = product.priceOptions || [];
                const images = product.images || []; // Fetch images directly from the product data

                // Return the formatted product details
                return {
                    productCode,
                    name: product.name || "Unknown", // Provide default name
                    description: product.description || "No description available", // Provide default description
                    priceOptions: priceOptions.map((option: any) => ({
                        id: option.id,
                        price: option.price,
                        label: option.label,
                        seatsUsed: option.seatsUsed,
                        productCode: option.productCode,
                    })),
                    images: images.slice(0, 4).map((img: any) => ({
                        id: img.id,
                        url: img.url,
                        thumbnailUrl: img.itemUrl,
                    })),
                };
            };

            // Get all category IDs
            const categoryIds = await fetchAllCategoryIds();

            if (!categoryIds || categoryIds.length === 0) {
                ctx.throw(500, "No categories returned from Rezdy API");
            }

            // Get all product codes across all categories
            const allProductCodes = (
                await Promise.all(
                    categoryIds.map(async (categoryId) => {
                        return fetchCategoryProductCodes(categoryId);
                    })
                )
            ).flat();

            if (!allProductCodes || allProductCodes.length === 0) {
                ctx.throw(500, "No products returned from Rezdy API");
            }

            // Fetch product details including description, price options, and images for all product codes
            const allProducts = await Promise.all(
                allProductCodes.map(async (productCode) => {
                    return fetchProductDetails(productCode);
                })
            );

            // Send the products with pricing, images, and descriptions
            ctx.send({ products: allProducts });
        } catch (error: any) {
            console.error("Error fetching product details:", error.response?.data || error.message);
            ctx.throw(500, "Failed to fetch product details");
        }
    },
};
 
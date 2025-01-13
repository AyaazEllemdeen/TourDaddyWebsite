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

            // Fetch product availability for a specific product code
            const fetchProductAvailability = async (productCode: string) => {
                const startTime = new Date().toISOString();  // Current time in ISO format
                const endTime = "2050-01-01T00:00:00Z";  // End time set to January 1, 2050

                const url = `https://api.rezdy.com/v1/availability`;
                const response = await axios.get(url, {
                    params: {
                        apiKey: API_KEY,
                        productCode: productCode,
                        startTime: startTime,
                        endTime: endTime,
                    },
                });

                const availability = response.data || [];

                // Return the availability details for the product
                return {
                    productCode,
                    availability,
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

            // Fetch product availability for all product codes
            const allProductAvailability = await Promise.all(
                allProductCodes.map(async (productCode) => {
                    return fetchProductAvailability(productCode);
                })
            );

            // Send the products' availability data
            ctx.send({ productsAvailability: allProductAvailability });
        } catch (error: any) {
            console.error("Error fetching product availability:", error.response?.data || error.message);
            ctx.throw(500, "Failed to fetch product availability");
        }
    },
};

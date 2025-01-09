import { Context } from "koa";
import axios from "axios";

const API_KEY = "ee733bd95f124758807d221055c06a5c";
const CATEGORY_IDS = [
    502052, // FULL DAY GROUP TOURS
    503781, // FLIGHT TOURS
    503782, // COMBO TOURS
    503787, // PRIVATE FULL DAY BOAT TOURS
    596669, // HALF DAY PRIVATE TOURS
    596671, // SUITABLE FOR CRUISE GUESTS
    597613, // HALF DAY GROUP TOURS
    597642, // ISLAND TOURS
];

export default {
    async find(ctx: Context) {
        try {
            const fetchCategoryProducts = async (categoryId: number) => {
                const url = `https://api.rezdy.com/v1/categories/${categoryId}/products`;
                const response = await axios.get(url, { params: { apiKey: API_KEY } });
                return response.data.products || [];
            };

            // Fetch products for all categories
            const allProducts = (
                await Promise.all(CATEGORY_IDS.map(fetchCategoryProducts))
            ).flat();

            if (!allProducts || allProducts.length === 0) {
                ctx.throw(500, "No products returned from Rezdy API");
            }

            // Randomly select 8 products
            const getRandomProducts = (array: any[], count: number) => {
                const shuffled = array.sort(() => 0.5 - Math.random());
                return shuffled.slice(0, count);
            };

            const selectedProducts = getRandomProducts(allProducts, 8).map((product: any) => {
                const image = product.images?.[0]?.itemUrl || "https://via.placeholder.com/150";

                return {
                    productCode: product.productCode,
                    image, // Image URL or fallback
                    name: product.name,
                    shortDescription: product.shortDescription,
                    advertisedPrice: product.advertisedPrice,
                };
            });

            // Send the data as the response
            ctx.send({ products: selectedProducts });
        } catch (error: any) {
            console.error("Error fetching products:", error.response?.data || error.message);
            ctx.throw(500, "Failed to fetch products");
        }
    },
};

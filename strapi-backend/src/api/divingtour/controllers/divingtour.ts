import { Context } from "koa";
import axios from "axios";

export default {
  async find(ctx: Context) {
    try {
      // Make the API request to fetch the products from Rezdy
      const response = await axios.get("https://api.rezdy.com/v1/categories/600540/products", {
        params: { apiKey: "ee733bd95f124758807d221055c06a5c" },
      });

      // Check if products are returned
      if (!response.data.products || response.data.products.length === 0) {
        ctx.throw(500, "No products returned from Rezdy API");
      }

      // Extract necessary details from the response
      const products = response.data.products.map((product: any) => ({
        name: product.name || "Unknown Name", 
        productCode: product.productCode || "Unknown Code", 
        shortDescription: product.shortDescription || "No description available", 
        advertisedPrice: product.advertisedPrice || "Price not available", 
        imageUrl: product.images?.[0]?.itemUrl || "", 
      }));

      // Return the formatted products data
      ctx.send({ products });
    } catch (error: any) {
      console.error("Error fetching products:", error.response?.data || error.message);
      ctx.throw(500, "Failed to fetch products");
    }
  },
};

// ./src/api/daytour/controllers/flighttour.ts

import { Context } from "koa";
import axios from "axios";

export default {
  async find(ctx: Context) {
    try {
      // Make the API request to fetch the products from Rezdy
      const response = await axios.get("https://api.rezdy.com/v1/categories/503781/products", {
        params: { apiKey: "ee733bd95f124758807d221055c06a5c" },
      });

      // Extract necessary details from the response
      const products = response.data.products.map((product: any) => ({
        name: product.name,
        shortDescription: product.shortDescription,
        advertisedPrice: product.advertisedPrice,
        imageUrl: product.images?.[0]?.itemUrl || "", // Grab the first image URL
      }));

      // If no products are returned, throw an error
      if (!products || products.length === 0) {
        ctx.throw(500, "No products returned from Rezdy API");
      }

      // Return the formatted products data
      ctx.send({ products });
    } catch (error: any) {
      console.error("Error fetching products:", error.response?.data || error.message);
      ctx.throw(500, "Failed to fetch products");
    }
  },
};

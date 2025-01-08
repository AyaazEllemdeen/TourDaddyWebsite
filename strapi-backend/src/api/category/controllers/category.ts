import { Context } from "koa";
import axios from "axios";

export default {
  async find(ctx: Context) {
    try {
      const response = await axios.get("https://api.rezdy.com/v1/categories", {
        params: { apiKey: "ee733bd95f124758807d221055c06a5c" },
      });

      // Ensure that the response is in the right format (id and name)
      const categories = response.data.categories.map((category: { id: number, name: string }) => ({
        id: category.id,  // Make sure to return the id
        name: category.name,  // Return the name
      }));

      if (!categories || categories.length === 0) {
        ctx.throw(500, "No categories returned from Rezdy API");
      }

      // Send back the formatted categories
      ctx.send({ categories });
    } catch (error: any) {
      console.error("Error fetching categories:", error.response?.data || error.message);
      ctx.throw(500, "Failed to fetch categories");
    }
  },
};
// ./src/api/category/routes/category.ts
export default {
    routes: [
      {
        method: 'GET',
        path: '/categories',
        handler: 'category.find',  // Ensure it calls the 'find' function in your controller
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  
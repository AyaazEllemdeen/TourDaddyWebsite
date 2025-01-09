// ./src/api/daytour/routes/cruiseguesttour.ts

import { factories } from '@strapi/strapi';

export default {
  routes: [
    {
      method: 'GET',
      path: '/cruiseguesttour',
      handler: 'cruiseguesttour.find',  // Ensure this matches the 'find' function in your controller
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

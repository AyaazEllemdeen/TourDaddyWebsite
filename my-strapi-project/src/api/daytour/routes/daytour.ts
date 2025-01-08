// ./src/api/daytour/routes/daytour.ts

import { factories } from '@strapi/strapi';

export default {
  routes: [
    {
      method: 'GET',
      path: '/daytour',
      handler: 'daytour.find',  // Ensure this matches the 'find' function in your controller
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

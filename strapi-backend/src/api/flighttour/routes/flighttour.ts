// ./src/api/daytour/routes/flighttour.ts

import { factories } from '@strapi/strapi';

export default {
  routes: [
    {
      method: 'GET',
      path: '/flighttour',
      handler: 'flighttour.find',  // Ensure this matches the 'find' function in your controller
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

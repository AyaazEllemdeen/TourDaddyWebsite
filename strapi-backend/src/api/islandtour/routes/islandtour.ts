// ./src/api/daytour/routes/islandtour.ts

import { factories } from '@strapi/strapi';

export default {
  routes: [
    {
      method: 'GET',
      path: '/islandtour',
      handler: 'islandtour.find',  // Ensure this matches the 'find' function in your controller
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

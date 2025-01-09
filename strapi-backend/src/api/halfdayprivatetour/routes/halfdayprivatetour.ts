// ./src/api/daytour/routes/halfdayprivatetour.ts

import { factories } from '@strapi/strapi';

export default {
  routes: [
    {
      method: 'GET',
      path: '/halfdayprivatetour',
      handler: 'halfdayprivatetour.find', 
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

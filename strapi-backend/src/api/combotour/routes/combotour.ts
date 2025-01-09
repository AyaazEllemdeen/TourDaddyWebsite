// ./src/api/daytour/routes/daytour.ts

import { factories } from '@strapi/strapi';

export default {
  routes: [
    {
      method: 'GET',
      path: '/combotour',
      handler: 'combotour.find', 
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

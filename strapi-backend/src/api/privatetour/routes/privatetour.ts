// ./src/api/daytour/routes/private.ts

import { factories } from '@strapi/strapi';

export default {
  routes: [
    {
      method: 'GET',
      path: '/privatetour',
      handler: 'privatetour.find', 
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

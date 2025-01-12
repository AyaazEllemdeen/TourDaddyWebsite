
import { factories } from '@strapi/strapi';

export default {
  routes: [
    {
      method: 'GET',
      path: '/divingtour',
      handler: 'divingtour.find',  // Ensure this matches the 'find' function in your controller
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

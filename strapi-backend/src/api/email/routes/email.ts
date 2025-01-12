import { factories } from '@strapi/strapi';

export default {
  routes: [
    {
      method: 'POST',
      path: '/send-email',
      handler: 'email.sendEmail',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

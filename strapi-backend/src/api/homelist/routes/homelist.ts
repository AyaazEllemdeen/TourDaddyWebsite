export default {
    routes: [
      {
        method: 'GET',
        path: '/homelist', // Define the endpoint path
        handler: 'homelist.find', // Reference the controller's method
        config: {
          auth: false, // Set to true if authentication is required
        },
      },
    ],
  };
  
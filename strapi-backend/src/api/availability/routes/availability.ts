export default {
    routes: [
        {
            method: "GET",
            path: "/availability", // The route endpoint
            handler: "availability.find", // The controller function to execute
            config: {
                policies: [], // Any policies (if needed)
                middlewares: [], // Any middlewares (if needed)
            },
        },
    ],
};

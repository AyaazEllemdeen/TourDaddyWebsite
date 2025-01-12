export default {
    routes: [
        {
            method: "GET",
            path: "/bookings", // The route endpoint
            handler: "booking.find", // The controller function to execute
            config: {
                policies: [], // Any policies (if needed)
                middlewares: [], // Any middlewares (if needed)
            },
        },
    ],
};

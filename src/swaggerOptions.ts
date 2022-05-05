export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Servicio de mantenimiento TV",
            version: "1.0.0",
            description: ""
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ],
    },
    apis: ["./src/routes/*.ts"]
}
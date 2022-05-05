export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Servicio de mantenimiento TV API",
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
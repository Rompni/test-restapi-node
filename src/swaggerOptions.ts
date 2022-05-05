export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Servicio de mantenimiento TV",
            version: "1.0.0",
            description: "Sistema de órdenes de servicio para una empresa que ofrece servicios de mantenimiento e instalación de soportes para televisores"
        },
    },
    apis: ["./src/routes/*.ts"]
}
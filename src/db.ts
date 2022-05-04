import {DataSource} from 'typeorm'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "postgres",
    port: 5432,
    database: "typeormdb",
    entities: []
});
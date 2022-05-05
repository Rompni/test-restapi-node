import {DataSource} from 'typeorm'
import {Tecnico} from "./entities/Tecnico";
import {Servicio} from "./entities/Servicio";
import {SolicitudServicio} from "./entities/SolicitudServicio";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 5432,
    database: process.env.DB_DATABASE,
    entities: [Tecnico, Servicio, SolicitudServicio],
    synchronize: true
});
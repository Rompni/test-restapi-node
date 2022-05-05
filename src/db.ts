import {DataSource} from 'typeorm'
import {Tecnico} from "./entities/Tecnico";
import {Servicio} from "./entities/Servicio";
import {SolicitudServicio} from "./entities/SolicitudServicio";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "postgres",
    port: 5432,
    database: "typeormdb",
    entities: [Tecnico, Servicio, SolicitudServicio],
    synchronize: true
});
import express from 'express';
import morgan from "morgan";
import cors from 'cors';
import tecnicoRoutes from './routes/tecnico.routes';
import servicioRoutes from './routes/servicio.routes';

import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from "swagger-jsdoc";
import {options} from "./swaggerOptions";

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/api', (_req, res) => res.send("Hola desde la API"));
app.get('/', (_req, res) => res.send("Hola desde la API"));


const specs = swaggerJSDoc(options);
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use('/api/tecnicos', tecnicoRoutes);
app.use('/api/servicios', servicioRoutes);


export default app;
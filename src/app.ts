import 'dotenv/config'
import express from 'express';
import morgan from "morgan";
import cors from 'cors';
import tecnicoRoutes from './routes/tecnico.routes';
import servicioRoutes from './routes/servicio.routes';
import solicitudesRoutes from './routes/solicitudes.routes';

import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from "swagger-jsdoc";
import {options} from "./swaggerOptions";

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/api', (_req, res) => res.send("Hola desde la API"));
app.get('/', (_req, res) => res.send("Hola, Puedes ingresar a la documentacion con con /api/docs"));

// CONFIGURACION DEL SWAGGER
const specs = swaggerJSDoc(options);
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use('/api/tecnicos', tecnicoRoutes);
app.use('/api/servicios', servicioRoutes);
app.use('/api/solicitudes', solicitudesRoutes );


export default app;
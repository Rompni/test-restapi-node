import express from 'express';
import morgan from "morgan";
import cors from 'cors';

//import swaggerUI from 'swagger-ui-express';
//import swaggerJSDoc from "swagger-jsdoc";

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//swaggerJSDoc()
//app.use('/docs', swaggerUI.serve);


export default app;
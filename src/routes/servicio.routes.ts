import {Router} from "express";

const router = Router();

router.get('/services', (req, res) => res.send('Hello World Servicios'))

export default router
import {Router} from "express";
import {createSolicitud} from "../controllers/solicitud.controllers";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      SolicitudServicio:
 *          type: object
 *          properties:
 *              token:
 *                  type: string
 *                  format: uuid
 *                  description: Token generado de la solicitud
 *              tecnicoId:
 *                  type: number
 *                  description: Id del tecnico asignado aleatoriamente.
 *              servicioId:
 *                  type: number
 *                  description: Id del servicio que se va a ofrecer.
 *              isFinished:
 *                  type: boolean
 *                  description: valida que la solicitud haya finalizado o no
 *              createdAt:
 *                  type: string
 *                  format: date-time
 *                  description: La fecha de creación de la solicitud.
 *              updatedAt:
 *                  type: string
 *                  format: date-time
 *                  description: La fecha de la ultima vez que la solicitud se actualizó.
 *          required:
 *              - servicioId
 *          example:
 *              token: "4dc113d4-6ac6-4fdb-9fd1-c214d486f0fe"
 *              tecnicoId: 4
 *              servicioId: 3
 *              isFinished: false
 *              createdAt: "2022-05-05T11:02:57.347Z"
 *              updatedAt: "2022-05-05T11:02:57.347Z"
 */

/**
 * @swagger
 * /api/solicitudes:
 *  post:
 *      summary: Función para crear una solicitud de un servicio técnico asignando un tecnico aleatorio.
 *      tags: [Solicitud]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: number
 *                      name: servicioId
 *                      description: Servicio que se va a solicitar
 *                  example:
 *                      servicioId: 3
 *
 *      responses:
 *          200:
 *              description: Solicitud creada correctamente.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/SolicitudServicio'
 *
 *          500:
 *              description: Error al intentar crear una solicitud.
 */
router.post('/', createSolicitud);

export default router;
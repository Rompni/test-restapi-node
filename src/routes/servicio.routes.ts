import {Router} from "express";
import {
    createServicio,
    deleteServicio,
    getServicio,
    getServicios,
    updateServicio
} from "../controllers/servicio.controllers";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Servicio:
 *          type: object
 *          properties:
 *              id:
 *                  type: number
 *                  description: El ID autogenerado del servicio
 *              name:
 *                  type: string
 *                  description: El nombre del servicio ofrecido
 *              createdAt:
 *                  type: string
 *                  format: date-time
 *                  description: La fecha de creación del servicio.
 *              updatedAt:
 *                  type: string
 *                  format: date-time
 *                  description: La fecha de la ultima vez que el servicio se actualizó
 *          required:
 *              - name
 *          example:
 *              id: 43
 *              name: "Actualizar software del TV"
 *              createdAt: "2022-05-05T05:34:43.051Z"
 *              updatedAt: "2022-05-05T05:34:43.051Z"
 *      ServicioNotFound:
 *          type: object
 *          properties:
 *              msg:
 *                  type: string
 *                  description: Un mensaje para cuando el objecto servicio no fue encontrado.
 *          example:
 *              msg: "Servicio no encontrado"
 *
 *  parameters:
 *      servicioId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: number
 *          description: EL id del servicio técnico.
 */

/**
 * @swagger
 * /api/servicios:
 *  post:
 *      summary: Esta función crea un servicio técnico
 *      tags: [Servicios Técnicos]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Servicio'
 *      responses:
 *          200:
 *              description: El objeto servicio creado correctamente.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/Servicio'
 *          500:
 *              description: Error al intentar crear un objeto servicio.
 *
 */
router.post('/', createServicio);

/**
 * @swagger
 * /api/servicios:
 *  get:
 *      summary: Esta función retorna una lista de servicios técnicos
 *      tags: [Servicios Técnicos]
 *      responses:
 *          200:
 *              description: lista de servicios técnicos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/Servicio'
 *
 */
router.get('/', getServicios);

/**
 * @swagger
 * /api/servicios/{id}:
 *  get:
 *      summary: Esta funcion retorna un servicio técnico
 *      tags: [Servicios Técnicos]
 *      parameters:
 *          - $ref: '#components/parameters/servicioId'
 *      responses:
 *          200:
 *              description: El objeto servicio solicitado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/Servicio'
 *          404:
 *              description: El objecto servicio no fue encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ServicioNotFound'
 *
 */
router.get('/:id', getServicio);

/**
 * @swagger
 * /api/servicios/{id}:
 *  put:
 *      summary: Esta funcion actualiza un servicio técnico
 *      tags: [Servicios Técnicos]
 *      parameters:
 *          - $ref: '#components/parameters/servicioId'
 *      responses:
 *          200:
 *              description: El objeto servicio actualizado correctamente.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/Servicio'
 *          404:
 *              description: El objecto servicio no fue encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ServicioNotFound'
 *
 */
router.put('/:id', updateServicio);

/**
 * @swagger
 * /api/servicios/{id}:
 *  delete:
 *      summary: Esta función elimina un servicio por Id.
 *      tags: [Servicios Técnicos]
 *      parameters:
 *          - $ref: '#components/parameters/servicioId'
 *      responses:
 *          200:
 *              description: Objecto servicio eliminado correctamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          name: msg
 *                      example:
 *                          msg: "Servicio eliminado correctamente"
 *
 *          404:
 *              description: Objecto servicio no encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/ServicioNotFound'
 *
 */
router.delete('/:id', deleteServicio);

export default router;
import {Router} from "express";
import {createTecnico, deleteTecnico, getTecnico, getTecnicos, updateTecnico} from "../controllers/tecnico.controllers"

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Tecnico:
 *          type: object
 *          properties:
 *              id:
 *                  type: id
 *                  description: El ID autogenerado del tecnico.
 *              name:
 *                  type: string
 *                  description: El nombre completo del tecnico.
 *              active:
 *                  type: boolean
 *                  description: Te permite saber si el tecnico esta activo.
 *              createdAt:
 *                  type: string
 *                  format: date-time
 *                  description: La fecha de creación del tecnico.
 *              updatedAt:
 *                  type: string
 *                  format: date-time
 *                  description: La fecha de la ultima vez que el objeto se actualizó.
 *          required:
 *              - name
 *          example:
 *              id: 22
 *              name: Andres Navarro
 *              active: true
 *              createdAt: "2022-05-05T05:34:43.051Z"
 *              updatedAt: "2022-05-05T05:34:43.051Z"
 *      TecnicoNotFound:
 *          type: object
 *          properties:
 *              msg:
 *                  type: string
 *                  description: un mensaje para cuando el objecto tecnico no fue encontrado
 *          example:
 *              msg: "Tecnico no encontrado"
 *
 *  parameters:
 *      tecnicoId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: number
 *          description: el id del tecnico
 */

/**
 * @swagger
 * /api/tecnicos:
 *  post:
 *      summary: Esta funcion crea un tecnico
 *      tags: [Tecnico]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Tecnico'
 *      responses:
 *          200:
 *              description: El objeto tecnico creado correctamente.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/Tecnico'
 *          500:
 *              description: Error al intentar crear un objeto tecnico.
 *
 */
router.post('/', createTecnico);

/**
 * @swagger
 * /api/tecnicos:
 *  get:
 *      summary: Esta funcion retorna una lista de tecnicos
 *      tags: [Tecnico]
 *      responses:
 *          200:
 *              description: lista de tecnicos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/Tecnico'
 *
 */
router.get('/', getTecnicos);

/**
 * @swagger
 * /api/tecnicos/{id}:
 *  get:
 *      summary: Esta funcion retorna un tecnico
 *      tags: [Tecnico]
 *      parameters:
 *          - $ref: '#components/parameters/tecnicoId'
 *      responses:
 *          200:
 *              description: El objeto tecnico solicitado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/Tecnico'
 *          404:
 *              description: El objecto tecnico no fue encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/TecnicoNotFound'
 *
 */
router.get('/:id', getTecnico);

/**
 * @swagger
 * /api/tecnicos/{id}:
 *  put:
 *      summary: Esta funcion actualiza un tecnico
 *      tags: [Tecnico]
 *      parameters:
 *          - $ref: '#components/parameters/tecnicoId'
 *      responses:
 *          200:
 *              description: El objeto tecnico actualizado correctamente.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/Tecnico'
 *          404:
 *              description: El objecto tecnico no fue encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/TecnicoNotFound'
 *
 */
router.put('/:id', updateTecnico);

/**
 * @swagger
 * /api/tecnicos/{id}:
 *  delete:
 *      summary: Esta funcion elimina un tecnico por Id.
 *      tags: [Tecnico]
 *      parameters:
 *          - $ref: '#components/parameters/tecnicoId'
 *      responses:
 *          204:
 *              description: Objecto tecnico eliminado correctamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          name: msg
 *                      example:
 *                          msg: "Tecnico eliminado correctamente"
 *
 *          404:
 *              description: Objecto tecnico no encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/TecnicoNotFound'
 *
 */
router.delete('/:id', deleteTecnico);

export default router
import {Request, Response} from "express";
import {Servicio} from "../entities/Servicio";
import {parseId, toNewServicioEntry, toUpdateServicioEntry} from "../utils";

export const createServicio = async (req: Request, res: Response) => {
    try {
        // VALIDAR ENTRADA DE DATO
        const newServicio = toNewServicioEntry(req.body)
        const {name} = newServicio;

        const addedServicio = new Servicio();
        addedServicio.name = name;

        await addedServicio.save();
        res.json(addedServicio);

    }catch (e) {
        if (e instanceof Error)
            return res.status(500).json({message: e.message})
    }
}

export const getServicios =  async (_req: Request, res: Response) => {
    try {
        const servicios = await Servicio.find()
        return res.json(servicios);
    } catch (e) {
        if (e instanceof Error)
            return res.status(500).json({message: e.message});
    }
}

export const updateServicio = async (req: Request, res: Response) => {
    try {
        // VALIDAR ENTRADA DE DATOS
        const updateTecnico = toUpdateServicioEntry(req.body)
        const {name} = updateTecnico

        const servicio = await Servicio.findOneBy({id: parseId(req.params.id)});

        if(!servicio) return res.status(404).json({message: "Servicio no encontrado"})

        servicio.name = name
        await servicio.save();

        return res.json(servicio)


    }catch (e) {
        if (e instanceof Error)
            return res.status(500).json({message: e.message});
    }
}

export const getServicio = async (req: Request, res: Response) => {
    try {
        const servicio = await Servicio.findOneBy({id: parseId(req.params.id)});
        if(!servicio) return res.status(404).json({message: "Servicio no encontrado"})

        return res.json(servicio)

    }catch (e) {
        if (e instanceof Error)
            return res.status(500).json({message: e.message});
    }
}

export const deleteServicio  = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const result = await Servicio.delete({id: parseId(id)});
        if(result.affected === 0)
            return res.status(404).json({message: "Servicio no encontrado"});

        return res.status(200).json({message: "Servicio eliminado correctamente"});

    }catch (e) {
        if (e instanceof Error)
            return res.status(500).json({message: e.message});
    }
}
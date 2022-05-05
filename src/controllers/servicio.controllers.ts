import {Request, Response} from "express";
import {Servicio} from "../entities/Servicio";

export const createServicio = async (req: Request, res: Response) => {
    try {
        const {name} = req.body;
        const servicio = new Servicio();
        servicio.name = name;

        await servicio.save();
        res.json(servicio);

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
        const {name} = req.body
        const servicio = await Servicio.findOneBy({id: +req.params.id});

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
        const servicio = await Servicio.findOneBy({id: +req.params.id});
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
        const result = await Servicio.delete({id: +id});
        if(result.affected === 0)
            return res.status(404).json({message: "Servicio no encontrado"});

        return res.status(200).json({message: "Servicio eliminado correctamente"});

    }catch (e) {
        if (e instanceof Error)
            return res.status(500).json({message: e.message});
    }
}
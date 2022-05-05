import {Request, Response} from "express";
import {Tecnico} from "../entities/Tecnico";

export const createTecnico = async (req: Request, res: Response) => {
    try {
        const {name} = req.body;
        const tecnico = new Tecnico();
        tecnico.name = name;

        await tecnico.save()
        res.json(tecnico)

    }catch (e) {
        if (e instanceof Error)
            return res.status(500).json({message: e.message})
    }
}

export const getTecnicos =  async (_req: Request, res: Response) => {
    try {
        const tecnicos = await Tecnico.find()
        return res.json(tecnicos);
    } catch (e) {
        if (e instanceof Error)
            return res.status(500).json({message: e.message});
    }
}

export const updateTecnico = async (req: Request, res: Response) => {
    try {
        const {name, active} = req.body
        console.log(name, active)
        const tecnico = await Tecnico.findOneBy({id: +req.params.id});

        if(!tecnico) return res.status(404).json({message: "Tecnico no encontrado"})

        if(active)
            tecnico.active = active

        tecnico.name = name
        await tecnico.save();

        return res.json(tecnico)


    }catch (e) {
        if (e instanceof Error)
            return res.status(500).json({message: e.message});
    }
}

export const getTecnico = async (req: Request, res: Response) => {
    try {
        const tecnico = await Tecnico.findOneBy({id: +req.params.id});
        if(!tecnico) return res.status(404).json({message: "Tecnico no encontrado"})

        return res.json(tecnico)

    }catch (e) {
        if (e instanceof Error)
            return res.status(500).json({message: e.message});
    }
}

export const deleteTecnico  = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const result = await Tecnico.delete({id: +id});
        if(result.affected === 0)
            return res.status(404).json({message: "Tecnico no encontrado"});

        return res.status(204).json({message: "Tecnico eliminado correctamente"})

    }catch (e) {
        if (e instanceof Error)
            return res.status(500).json({message: e.message});
    }
}
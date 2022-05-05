import {Request, Response} from "express";
import {Tecnico} from "../entities/Tecnico";
import {parseId, toNewTecnicoEntry, toUpdateTecnicoEntry} from "../utils";

export const createTecnico = async (req: Request, res: Response) => {
    try {
        // VALIDAR ENTRADA DE DATOS
        const newTecnico = toNewTecnicoEntry(req.body)
        const {name} = newTecnico;

        const addedTecnico = new Tecnico();
        addedTecnico.name = name;

        await addedTecnico.save()
        res.json(addedTecnico)

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

        // VALIDAR ENTRADA DE DATOS
        const updateTecnico = toUpdateTecnicoEntry(req.body)
        const {name, active} = updateTecnico

        const tecnico = await Tecnico.findOneBy({id: parseId(req.params.id)});

        if(!tecnico) return res.status(404).json({message: "Tecnico no encontrado"})

        if(active !== undefined) tecnico.active = active
        if(name !== undefined) tecnico.name = name

        await tecnico.save();

        return res.json(tecnico)


    }catch (e) {
        if (e instanceof Error)
            return res.status(500).json({message: e.message});
    }
}

export const getTecnico = async (req: Request, res: Response) => {
    try {
        const tecnico = await Tecnico.findOneBy({id: parseId(req.params.id)});
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
        const result = await Tecnico.delete({id: parseId(id)});
        if(result.affected === 0)
            return res.status(404).json({message: "Tecnico no encontrado"});

        return res.status(200).json({message: "Tecnico eliminado correctamente"})

    }catch (e) {
        if (e instanceof Error)
            return res.status(500).json({message: e.message});
    }
}

//FUNCIONES PARA REUTILIZAR
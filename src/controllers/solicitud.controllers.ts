import {Request, Response} from "express";
import {Servicio} from "../entities/Servicio";
import {Tecnico} from "../entities/Tecnico";
import {SolicitudServicio} from "../entities/SolicitudServicio";

export const createSolicitud = async (req: Request, res: Response) => {
    try {
        const {idServicio} = req.body;
        const servicio = await Servicio.findOneBy({id: +idServicio});

        if(!servicio) return res.status(404).json({message: `Servicio con id ${idServicio} no encontrado`})

        // Obteniendo un tecnico de manera aleatoria
        const tecnico = await Tecnico.getRepository()
            .createQueryBuilder()
            .select('tecnicos')
            .from(Tecnico, "tecnicos")
            .where("tecnicos.active = true")
            .orderBy("RANDOM()")
            .limit(1)
            .getOne()

        if(!tecnico) return res.status(404).json({message: "No se pudo asignar un tecnico a la solicitud."})

        const solicitud = new SolicitudServicio()
        solicitud.tecnicoId = tecnico.id
        solicitud.servicioId = servicio.id

        await solicitud.save()

        return res.json(solicitud)

    }catch (e) {
        if (e instanceof Error)
            return res.status(500).json({message: e.message})
    }
}

export const getSolicitudesTecnico = async (req: Request, res: Response) => {
    try{
        const tecnico = await Tecnico.findOneBy({id: +req.params.id});
        if(!tecnico) return res.status(404).json({message: "Tecnico no encontrado"})

        const solicitudes = await SolicitudServicio.findBy({tecnicoId: tecnico.id})
        res.json(solicitudes)

    }catch (e) {
        if (e instanceof Error)
            return res.status(500).json({message: e.message});
    }
}
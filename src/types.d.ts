
export interface NewTecnicoEntry {
    name: string
}

export interface NewServicioEntry {
    name: string
}

export interface NewSolicitudEntry {
    servicioId: number
}

export interface UpdateTecnicoEntry{
    name?: string
    active?: boolean
}
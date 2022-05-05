import {NewServicioEntry, NewSolicitudEntry, NewTecnicoEntry, UpdateTecnicoEntry} from "./types";

// Funcion para validar si la entrada es un string
const isString = (element: any): boolean => {
    return typeof element === 'string';
}

// Funcion para validar si la entrada es un booleano
const isBoolean = (element: any): boolean => {
    return typeof element === 'boolean';
}

// Funcion para validar el nombre recibido
const parseName = (nameFromRequest: any): string => {
    if(!isString(nameFromRequest))
        throw new Error("Tipo de dato incorrecto o hace falta name");

    return nameFromRequest;
}

// Funcion para validar el id recibido
export const parseId = (idFromRequest: any): number => {
    if(!Number.isInteger(+idFromRequest))
        throw new Error("Tipo de dato incorrecto  o hace falta id");

    return idFromRequest;
}

// funcion para validar el booleano recibido
const parseBoolean = (booleanFromRequest: any): boolean => {
    if(!isBoolean(booleanFromRequest))
        throw new Error("Tipo de dato incorrecto  o hace falta");

    return booleanFromRequest;
}

export const toNewTecnicoEntry = (object: any) => {
    const newEntry: NewTecnicoEntry = {
        name: parseName(object.name)
    }

    return newEntry;
}

export const toUpdateTecnicoEntry = (object: any) => {
    const updateEntry: UpdateTecnicoEntry = {};

    if(object.name !== undefined)
        updateEntry.name = parseName(object.name);
    if(object.active !== undefined)
        updateEntry.active = parseBoolean(object.active);

    return updateEntry;
}

export const toNewServicioEntry = (object: any) => {
    const newEntry: NewServicioEntry = {
        name: parseName(object.name)
    }

    return newEntry
}

export const toUpdateServicioEntry = (object: any) => {
    const updateEntry: NewServicioEntry = {
        name: parseName(object.name)
    };

    return updateEntry;
}
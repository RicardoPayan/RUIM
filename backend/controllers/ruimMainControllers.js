import {PaginaInicio} from "../models/paginasModels/PaginaInicio.js";
import {PaginaUbicacion} from "../models/paginasModels/PaginaUbicacion.js";

const obtenerPaginaInicio = (req, res) =>{
    res.send("Desde /api/obtenerInicio");
}

const obtenerPaginaUbicacion = (req, res) =>{
    res.send("Desde /api/obtenerUbicacion");
}

export {obtenerPaginaInicio, obtenerPaginaUbicacion}
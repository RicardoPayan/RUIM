import Registro from "../models/registro/Registro.js";
import {PaginaInicio} from "../models/paginasModels/PaginaInicio.js";
import {PaginaPoster} from "../models/paginasModels/PaginaPoster.js";
import {PaginaPrograma} from "../models/paginasModels/PaginaPrograma.js";
import {PaginaContacto} from "../models/paginasModels/PaginaContacto.js";
import {PaginaUbicacion} from "../models/paginasModels/PaginaUbicacion.js";

const obtenerRegistros = async (req,res) =>{
    try{
        const registros = await Registro.findAll();

        //Si no hay registros, devolvemos mensaje de advertencia
        if(!Object.keys(registros).length){
            res.json({msg : "No hay registros"});
        }

        res.json(registros);
    }catch (error) {
        console.log(error);
    }
}

const obtenerRegistrosPendientes = async (req,res) =>{
    try{
        const registros = await Registro.findAll({where : {estado : 0}});
        res.json(registros);
    }catch (error) {
        console.log(error)
    }
}

const obtenerRegistrosAceptados = async (req,res) =>{
    try{
        const registros = await Registro.findAll({where : {estado : 1}});
        res.json(registros);
    }catch (error) {
        console.log(error)
    }
}

const obtenerRegistrosRechazados = async (req,res) =>{
    try{
        const registros = await Registro.findAll({where : {estado : -1}});
        res.json(registros);
    }catch (error) {
        console.log(error)
    }
}

const editarPaginaInicio = async (req,res) =>{
    try {
        //Borramos la version pasada de la pagina
        await PaginaInicio.destroy({
            truncate: true
        });

        //Creamos la nueva
        await PaginaInicio.create(req.body);
    }catch (error){
        console.log(error);
    }

    res.json({msg : "Actualizacion exitosa"});
}

const editarPaginaPoster = async (req,res) => {
    try {
        //Borramos la version pasada de la pagina
        await PaginaPoster.destroy({
            truncate: true
        });

        //Creamos la nueva
        await PaginaPoster.create(req.body);
    }catch (error){
        console.log(error);
    }

    res.json({msg : "Actualizacion exitosa"});
}

const editarPaginaPrograma = async (req,res) => {
    try {
        //Borramos la version pasada de la pagina
        await PaginaPrograma.destroy({
            truncate: true
        });

        //Creamos la nueva
        await PaginaPrograma.create(req.body);
    }catch (error){
        console.log(error);
    }

    res.json({msg : "Actualizacion exitosa"});
}

const editarPaginaContacto = async (req,res) => {
    try {
        //Borramos la version pasada de la pagina
        await PaginaContacto.destroy({
            truncate: true
        });

        //Creamos la nueva
        await PaginaContacto.create(req.body);
    }catch (error){
        console.log(error);
    }

    res.json({msg : "Actualizacion exitosa"});
}

const editarPaginaUbicacion = async (req,res) => {
    try {
        //Borramos la version pasada de la pagina
        await PaginaUbicacion.destroy({
            truncate: true
        });

        //Creamos la nueva
        await PaginaUbicacion.create(req.body);
    }catch (error){
        console.log(error);
    }

    res.json({msg : "Actualizacion exitosa"});
}


export  {
    obtenerRegistros,
    obtenerRegistrosPendientes,
    obtenerRegistrosAceptados,
    obtenerRegistrosRechazados,
    editarPaginaInicio,
    editarPaginaPrograma,
    editarPaginaPoster,
    editarPaginaUbicacion,
    editarPaginaContacto
}
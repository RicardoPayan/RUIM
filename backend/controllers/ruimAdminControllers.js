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
            return res.json({msg : "No hay registros"});
        }

        res.json(registros);
    }catch (error) {
        console.log(error);
    }
}

const obtenerRegistrosFiltrados = async (req,res) =>{

    const {estado} = req.body; //Extrayendo que tipo de registro quiere el usuario.

    try{
        const registros = await Registro.findAll({where : {estado}});

        //Si no hay registros, devolvemos mensaje de advertencia
        if(!Object.keys(registros).length){
            return res.json({msg : "No hay registros"});
        }

        res.json(registros);
        
    }catch (error) {
        console.log(error);
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

const guardarPrograma = async (req, res) => {
    if(!req.file){
        console.log("no file");
    } else {
        console.log(req.file.filename)
        var img = `${process.env.FRONTEND_URL}/uploads/programas/` + req.file.filename
        res.send(img);
    }
}
export  {
    obtenerRegistros,
    obtenerRegistrosFiltrados,
    editarPaginaInicio,
    editarPaginaPrograma,
    editarPaginaPoster,
    editarPaginaUbicacion,
    editarPaginaContacto,
    guardarPrograma
}
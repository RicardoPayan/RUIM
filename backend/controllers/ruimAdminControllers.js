import Registro from "../models/registro/Registro.js";
import {PaginaInicio} from "../models/paginasModels/PaginaInicio.js";
import {PaginaPoster} from "../models/paginasModels/PaginaPoster.js";
import {PaginaPrograma} from "../models/paginasModels/PaginaPrograma.js";
import {PaginaContacto} from "../models/paginasModels/PaginaContacto.js";
import {PaginaUbicacion} from "../models/paginasModels/PaginaUbicacion.js";
import emailCambioEstado from "../helpers/emailCambioEstado.js";
import {where} from "sequelize";


const resumenDashboard = async (req,res)=>{

    const promiseDB = []; //Arreglo para ejecutar todos los awaits al mismo tiempo

    promiseDB.push(Registro.findAll());
    promiseDB.push(Registro.findAll({where : {estado : 1}}));
    promiseDB.push(Registro.findAll({where : {estado : -1}}));

    try{

        const resultado = await Promise.all(promiseDB);

        res.json({
            registrosTotales :  Object.keys(resultado[0]).length,
            registrosAceptados :  Object.keys(resultado[1]).length,
            registrosRechazados :  Object.keys(resultado[2]).length
        });
    }catch (error) {
        console.log(error);
    }

}

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

//Funcion para cambiar el estado de un registro
const editarEstadoRegistro = async (req,res) =>{

    const {id, nuevoEstado} = req.body;

    const registro = await Registro.findOne({where : {id}});

    if(!registro){
        const error = new Error('No existe el registro');
        return res.status(400).json({msg : error.message});
    }

    try{
        await Registro.update({estado : nuevoEstado}, {where : {id}});

        const {correo, representante, titulo} = registro

        console.log(nuevoEstado);

        emailCambioEstado({
            correo,
            representante,
            titulo,
            nuevoEstado
        })

        res.json({msg : "Registro actualizado. Se le notifico al participante por email"});

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


export  {
    resumenDashboard,
    obtenerRegistros,
    obtenerRegistrosFiltrados,
    editarEstadoRegistro,
    editarPaginaInicio,
    editarPaginaPrograma,
    editarPaginaPoster,
    editarPaginaUbicacion,
    editarPaginaContacto,
}
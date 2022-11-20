import Registro from "../models/registro/Registro.js";
import Fechas from "../models/registro/Fechas.js";
import {Autor} from "../models/registro/Autor.js";
import {PaginaInicio} from "../models/paginasModels/PaginaInicio.js";
import {PaginaPoster} from "../models/paginasModels/PaginaPoster.js";
import {PaginaPrograma} from "../models/paginasModels/PaginaPrograma.js";
import {PaginaContacto} from "../models/paginasModels/PaginaContacto.js";
import {PaginaUbicacion} from "../models/paginasModels/PaginaUbicacion.js";
import emailCambioEstado from "../helpers/emailCambioEstado.js";
import {ultimoRegistro} from "../helpers/buscarUltimoRegistro.js";
import { Constancia } from "../models/adminModels/Constancias.js";



const resumenDashboard = async (req,res)=>{

    const promiseDB = []; //Arreglo para ejecutar todos los awaits al mismo tiempo

    //Todos los registros de un tipo
    promiseDB.push(Registro.findAll());
    promiseDB.push(Registro.findAll({where : {estado : 0}}));
    promiseDB.push(Registro.findAll({where : {estado : 1}}));
    promiseDB.push(Registro.findAll({where : {estado : -1}}));

    //Los ultimos 5 de un tipo
    promiseDB.push(ultimoRegistro(Registro, 5));

    try{

        const resultado = await Promise.all(promiseDB);

        res.json({
            registrosTotales :  Object.keys(resultado[0]).length,
            registrosPendientes :  Object.keys(resultado[1]).length,
            registrosAceptados :  Object.keys(resultado[2]).length,
            registrosRechazados :  Object.keys(resultado[3]).length,
            ultimosRegistros : resultado[4]
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
        const registros = await Registro.findAll({where : {estado: estado}});

        //Si no hay registros, devolvemos mensaje de advertencia
        if(!Object.keys(registros).length){
            return res.json({msg : "No hay registros"});
        }

        res.json(registros);
        
    }catch (error) {
        console.log(error);
    }
}


const obtenerAutores = async (req,res) =>{
    const {idRegistro} = req.body;

    try{
        const autores = await Autor.findAll({where : {registroId : idRegistro}});
        res.json(autores);
    }catch(error){
        console.log(error);
    }
}


const obtenerFechasValidas = async (req,res)=>{

    const periodo = await Fechas.findAll();
    const todayFormat = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    const valido = !(todayFormat<periodo.fechaInicio && todayFormat>=periodo.fechaFinal)

    res.json(
        {fechas : periodo,
        todayFormat}
    );
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

const guardarPrograma = async (req, res) => {
    if(!req.file){
        console.log("no file");
    } else {
        console.log(req.file.filename)
        var img = `${process.env.BACKEND_URL}/uploads/programas/` + req.file.filename
        res.send(img);
    }
}

const editarFechas = async (req,res) =>{
    try {
        //Borramos la version pasada de la pagina
        await Fechas.destroy({
            truncate: true
        });

        //Creamos la nueva
        await Fechas.create(req.body);
    }catch (error){
        console.log(error);
    }

    res.json({msg : "Actualizacion exitosa"});
}


const descargarPdf = async(req,res)=>{
    const{routePdf} = req.body;
    res.contentType("application/pdf");
    res.download(routePdf);
}

const sendPdf = async(req,res)=>{
    const{routePdf} = req.body;
    res.contentType("application/pdf");
    res.sendFile(routePdf);
}

const guardarConstancia = async (req, res) => {
    try{
        await Constancia.create(req.body);
        res.send("saved");
    }
    catch{
        res.send("error");
    }

}
export  {
    resumenDashboard,
    obtenerRegistros,
    obtenerRegistrosFiltrados,
    obtenerAutores,
    obtenerFechasValidas,
    editarEstadoRegistro,
    editarPaginaInicio,
    editarPaginaPrograma,
    editarPaginaPoster,
    editarPaginaUbicacion,
    editarPaginaContacto,
    editarFechas,
    guardarPrograma,
    descargarPdf,
    sendPdf,
    guardarConstancia
}
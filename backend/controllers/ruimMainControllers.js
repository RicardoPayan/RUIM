import {PaginaInicio} from "../models/paginasModels/PaginaInicio.js";
import {PaginaUbicacion} from "../models/paginasModels/PaginaUbicacion.js";
import {PaginaPrograma} from "../models/paginasModels/PaginaPrograma.js";
import {PaginaContacto} from "../models/paginasModels/PaginaContacto.js";
import {PaginaPoster} from "../models/paginasModels/PaginaPoster.js";
import Registro from "../models/registro/Registro.js";
import {Autor} from "../models/registro/Autor.js";

import {ultimoRegistro} from "../helpers/buscarUltimoRegistro.js"; //Funcion para obtener el ultimo registro de la base de datos

const obtenerPaginaInicio = async (req, res) =>{
    try {
        //Buscamos el ultimo registros den la base de datos
        const cuerpoPagina = await ultimoRegistro(PaginaInicio);
        res.json(cuerpoPagina);

    }catch (error){
        console.log(error);
    }
}


const obtenerPaginaPrograma = async (req,res) =>{
    try {
        //Buscamos el ultimo registros den la base de datos
        const cuerpoPagina = await ultimoRegistro(PaginaPrograma);
        res.json(cuerpoPagina);

    }catch (error){
        console.log(error);
    }
}

const obtenerPaginaPoster = async (req,res)=>{
    try {
        //Buscamos el ultimo registros den la base de datos
        const cuerpoPagina = await ultimoRegistro(PaginaPoster);
        res.json(cuerpoPagina);

    }catch (error){
        console.log(error);
    }
}

const obtenerPaginaContacto = async (req,res) =>{
    try {
        //Buscamos el ultimo registros den la base de datos
        const cuerpoPagina = await ultimoRegistro(PaginaContacto);
        res.json(cuerpoPagina);

    }catch (error){
        console.log(error);
    }
}

const obtenerPaginaUbicacion = async (req, res) =>{
    try {
        //Buscamos el ultimo registros den la base de datos
        const cuerpoPagina = await ultimoRegistro(PaginaUbicacion);
        res.json(cuerpoPagina);

    }catch (error){
        console.log(error);
    }
}

const guardarResumen = async (req, res) => {
    if(!req.file){
        console.log("no file");
    } else {
        console.log(req.file.filename)
        var img = `${process.env.FRONTEND_URL}/uploads/resumenes/` + req.file.filename
        res.send(img);
    }

}
const registrarParticipacion = async (req,res) =>{
    const {apellidoPaterno, apellidoMaterno, institucion, departamento
    , gradoAcademico, modalidad, correo, estado, resumenReferencia, autores, titulo, representante} = req.body;


    //TODO Implementar validacion para que los campos no esten vacios

    try{
        const registro =  await Registro.create({
            apellidoPaterno,
            apellidoMaterno,
            institucion,
            departamento,
            gradoAcademico,
            modalidad,
            correo,
            estado,
            resumenReferencia,
            titulo,
            representante
            }
        );

        //Guardadno autores en su propia tabla, con el id del registro para relacionarlos
        for ( let autor of autores){
            await Autor.create({
                nombre: autor,
                registroId : registro.id
            });
        }

        res.json({msg : "Registro exitoso"});
    }catch (error){
        console.log(error);
    }
}

export {obtenerPaginaInicio,
    obtenerPaginaUbicacion,
    obtenerPaginaContacto,
    obtenerPaginaPrograma,
    obtenerPaginaPoster,
    registrarParticipacion,
    guardarResumen}
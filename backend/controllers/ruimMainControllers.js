import {PaginaInicio} from "../models/paginasModels/PaginaInicio.js";
import {PaginaUbicacion} from "../models/paginasModels/PaginaUbicacion.js";
import {PaginaPrograma} from "../models/paginasModels/PaginaPrograma.js";
import {PaginaContacto} from "../models/paginasModels/PaginaContacto.js";
import {PaginaPoster} from "../models/paginasModels/PaginaPoster.js";
import Registro from "../models/registro/Registro.js";
import {Autor} from "../models/registro/Autor.js";
import emailRegistro from "../helpers/emailRegistro.js";

import {ultimoRegistro} from "../helpers/buscarUltimoRegistro.js"; //Funcion para obtener el ultimo registro de la base de datos

const obtenerPaginaInicio = async (req, res) =>{
    try {
        //Buscamos el ultimo registros den la base de datos
        const cuerpoPagina = await ultimoRegistro(PaginaInicio,1);
        res.json(cuerpoPagina);

    }catch (error){
        console.log(error);
    }
}


const obtenerPaginaPrograma = async (req,res) =>{
    try {
        //Buscamos el ultimo registros den la base de datos
        const cuerpoPagina = await ultimoRegistro(PaginaPrograma,1);
        res.json(cuerpoPagina);

    }catch (error){
        console.log(error);
    }
}

const obtenerPaginaPoster = async (req,res)=>{
    try {
        //Buscamos el ultimo registros den la base de datos
        const cuerpoPagina = await ultimoRegistro(PaginaPoster,1);
        res.json(cuerpoPagina);

    }catch (error){
        console.log(error);
    }
}

const obtenerPaginaContacto = async (req,res) =>{
    try {
        //Buscamos el ultimo registros den la base de datos
        const cuerpoPagina = await ultimoRegistro(PaginaContacto,1);
        res.json(cuerpoPagina);

    }catch (error){
        console.log(error);
    }
}

const obtenerPaginaUbicacion = async (req, res) =>{
    try {
        //Buscamos el ultimo registros den la base de datos
        const cuerpoPagina = await ultimoRegistro(PaginaUbicacion,1);
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
        var img = process.cwd()+`/uploads/resumenes/` + req.file.filename
        res.send(img);
    }

}
const registrarParticipacion = async (req,res) =>{
    const {institucion, departamento
    , gradoAcademico, modalidad, correo, estado, resumenReferencia, autores, titulo, representante} = req.body;


    //TODO Implementar validacion para que los campos no esten vacios

    try{
        const registro =  await Registro.create({
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
        
        emailRegistro({
            correo,
            representante,
            titulo
        })

        res.json({msg : "Registro exitoso, verifica tu email"});
    }catch (error){
        console.log(error);
    }
}

const buscarConstancia = async (req,res) =>{
    res.json({msg : "Desde buscar constancia"})
}

export {obtenerPaginaInicio,
    obtenerPaginaUbicacion,
    obtenerPaginaContacto,
    obtenerPaginaPrograma,
    obtenerPaginaPoster,
    registrarParticipacion,
    buscarConstancia,
    guardarResumen}
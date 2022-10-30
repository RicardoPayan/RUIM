import { Sequelize } from "sequelize";
import db from "../../config/db.js";

export const Registro = db.define("registros",{
    nombres: {
        type: Sequelize.STRING,
        required : true
    },

    apellidoPaterno: {
        type: Sequelize.STRING,
        required : true
    },

    apellidoMaterno: {
        type: Sequelize.STRING,
        required : true
    },

    institucion: {
        type: Sequelize.STRING,
        required : true
    },

    departamento: {
        type: Sequelize.STRING,
        required : true
    },

    gradoAcademico: {
        type: Sequelize.STRING,
        required : true
    },

    modalidad: {
        type: Sequelize.STRING,
        required : true
    },

    correo: {
        type: Sequelize.STRING,
        required : true
    },

    estado: {
        type: Sequelize.INTEGER,
        required : true
    },

    resumenReferencia: {
        type: Sequelize.STRING,
        required : true
    },

})
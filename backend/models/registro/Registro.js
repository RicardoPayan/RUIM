import { Sequelize } from "sequelize";
import db from "../../config/db.js";

export const Registro = db.define("registros",{
    nombres: {
        type: Sequelize.STRING
    },

    apellidoPaterno: {
        type: Sequelize.STRING
    },

    apellidoMaterno: {
        type: Sequelize.STRING
    },

    institucion: {
        type: Sequelize.STRING
    },

    departamento: {
        type: Sequelize.STRING
    },

    gradoAcademico: {
        type: Sequelize.STRING
    },

    modalidad: {
        type: Sequelize.STRING
    },

    correo: {
        type: Sequelize.STRING
    },

    estado: {
        type: Sequelize.INTEGER
    },

    resumenReferencia: {
        type: Sequelize.STRING
    },

})
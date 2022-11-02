import { Sequelize } from "sequelize";
import db from "../../config/db.js";

const Registro = db.define("registros",{
    titulo: {
        type: Sequelize.STRING,
        required: true
    },
    representante: {
        type: Sequelize.STRING,
        required: true
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
await Registro.sync({alter: true});

export default Registro;
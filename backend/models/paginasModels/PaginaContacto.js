import { Sequelize } from "sequelize";
import db from "../../config/db.js";

export const PaginaContacto = db.define("paginaContacto",{
   instrucciones: {
        type: Sequelize.TEXT('tiny')
    },
    
    contacto: {
        type: Sequelize.STRING
    },

    year: {
        type: Sequelize.STRING
    }
    
})

await PaginaContacto.sync({alter: true});
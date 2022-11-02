import { Sequelize } from "sequelize";
import db from "../../config/db.js";

export const PaginaContacto = db.define("paginaContacto",{
   instrucciones: {
        type: Sequelize.STRING
    },
    
    contacto: {
        type: Sequelize.STRING
    },
    
})

await PaginaContacto.sync({alter: true});
import { Sequelize } from "sequelize";
import db from "../../config/db.js";

export const PaginaInicio = db.define("paginainicio",{

   nombreEvento: {
        type: Sequelize.STRING
    },
    
     fechas: {
        type: Sequelize.STRING
    },
    
     lugar: {
        type: Sequelize.STRING
    },
    
     parrafo1: {
        type: Sequelize.TEXT,
         allowNull : false
    },
    
     parrafo2: {
        type: Sequelize.TEXT,
    },
})
await PaginaInicio.sync({alter: true});
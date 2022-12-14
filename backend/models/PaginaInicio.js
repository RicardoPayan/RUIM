import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const PaginaInicio = db.define("paginaInicio",{
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
        type: Sequelize.STRING
    },
    
     parrafo2: {
        type: Sequelize.STRING
    },
})
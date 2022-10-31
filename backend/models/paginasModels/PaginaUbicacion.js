import { Sequelize } from "sequelize";
import db from "../../config/db.js";

export const PaginaUbicacion = db.define("paginaUbicacion",{
   nombreLugar: {
        type: Sequelize.STRING
    },
    
    direccion: {
        type: Sequelize.STRING
    },
    
    colonia: {
        type: Sequelize.STRING
    },
    
    ciudad: {
        type: Sequelize.STRING
    },
    
})
await PaginaUbicacion.sync({alter: true});
    import { Sequelize } from "sequelize";
import db from "../../config/db.js";

export const PaginaPrograma = db.define("paginaPrograma",{
   posterReferencia: {
        type: Sequelize.STRING
    },

    year: {
        type: Sequelize.STRING
    }
    
})

await PaginaPrograma.sync({alter: true});
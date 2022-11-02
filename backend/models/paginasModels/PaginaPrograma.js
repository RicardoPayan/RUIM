    import { Sequelize } from "sequelize";
import db from "../../config/db.js";

export const PaginaPrograma = db.define("paginaPrograma",{
   posterReferencia: {
        type: Sequelize.STRING
    },
    
})
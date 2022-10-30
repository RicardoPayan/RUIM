import { Sequelize } from "sequelize";
import db from "../../config/db.js";

export const Autor = db.define("autores",{
    nombre: {
        type: Sequelize.STRING
    },

    registroId: {
        type: Sequelize.INTEGER
    },

})
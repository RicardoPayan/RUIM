import { Sequelize } from "sequelize";
import Registro from "./Registro.js";
import db from "../../config/db.js";


export const Autor = db.define("autores",{
    nombre: {
        type: Sequelize.STRING
    },

    registroId: {
        type: Sequelize.INTEGER
    },

})

Registro.hasMany(Autor, {
    foreignKey : "registroId",
    onDelete : "SET NULL",
})
Autor.belongsTo(Registro);

await Autor.sync({alter: true});


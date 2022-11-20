import { Sequelize } from "sequelize";
import db from "../../config/db.js";

export const Constancia = db.define("constancia",{

    token: {
        type: Sequelize.STRING
    },

    referencia: {
        type: Sequelize.STRING
    },

})

await Constancia.sync({alter: true});
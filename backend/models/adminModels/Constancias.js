import { Sequelize } from "sequelize";
import db from "../../config/db.js";

export const Constancia = db.define("constancias",{
   token: {
        type: Sequelize.STRING
    },
    
    referencia: {
        type: Sequelize.STRING
    },
    
})

await Constancia.sync({alter: true});
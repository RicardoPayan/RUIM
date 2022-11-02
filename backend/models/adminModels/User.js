import { Sequelize } from "sequelize";
import db from "../../config/db.js";

export const User = db.define("users",{
   usuario: {
        type: Sequelize.STRING
    },
    
    contrasena: {
        type: Sequelize.STRING
    },
    
})

await User.sync({alter: true});
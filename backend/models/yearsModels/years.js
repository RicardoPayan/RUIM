import { Sequelize } from "sequelize";
import db from "../../config/db.js";

export const years = db.define("years",{
   year: {
        type: Sequelize.INTEGER
    },
    
    active: {
        type: Sequelize.STRING
    },
    
})

await years.sync({alter: true});
import { Sequelize } from "sequelize";
import db from "../../config/db.js";

export const PaginaPoster = db.define("paginaposter",{
    referencia: {
        type: Sequelize.STRING
    },

    year: {
        type: Sequelize.STRING
    }

})

await PaginaPoster.sync({alter: true});
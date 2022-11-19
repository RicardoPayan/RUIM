import { Sequelize } from "sequelize";
import db from "../../config/db.js";


 const Fechas = db.define("fechas",{
    fechaInicio: {
        type: Sequelize.DATEONLY
    },

    fechaFinal: {
        type: Sequelize.DATEONLY
    },

})

await Fechas.sync({alter: true});

 export default Fechas;


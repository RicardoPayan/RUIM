import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import cors from "cors";
import ruimMainRoutes from "./routes/ruimMainRoutes.js";
import ruimLoginRoutes from "./routes/ruimLoginRoutes.js";
//Iniciando express
const app = express();


//Diciendole a express que enviaremos respuestas de tipo JSON
app.use(express.json());


dotenv.config();


//Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectado'))
    .catch(error => console.log(error));

//Permitir al front hacer request al backend


//TODO Checar este codigo
/*const corsOptions = {
    origin : function (origin, callback) {
        if(dominiosPermitidos.indexOf(origin) !== -1){
            //El origen del request esta permitido
            callback(null, true);
        }else{
            callback(new Error('No permitido por CORS'))
        }
    }
}*/
app.use(cors());



//Rutas de la seccion publica
app.use('/api/ruimMain', ruimMainRoutes);

//Ruta para el login
app.use('/api/adminLogin', ruimLoginRoutes);

//Definiendo el servidor de desarrollo para el backend
app.listen(4000, ()=>{
    console.log('Servidor funcionando en el puerto 4000');
});
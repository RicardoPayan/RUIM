import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import ruimMainRoutes from "./routes/ruimMainRoutes.js";

//Iniciando express
const app = express();


//Diciendole a express que enviaremos respuestas de tipo JSON
app.use(express.json());

dotenv.config();


//Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectado'))
    .catch(error => console.log(error));

//Probando que funcione el servidor
app.use('/api/ruimMain', ruimMainRoutes);

//Definiendo el servidor de desarrollo para el backend
app.listen(4000, ()=>{
    console.log('Servidor funcionando en el puerto 4000');
});
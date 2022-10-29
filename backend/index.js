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
app.use(cors());

dotenv.config();


//Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectado'))
    .catch(error => console.log(error));

//Rutas de la seccion publica
app.use('/api/ruimMain', ruimMainRoutes);

//Ruta para el login
app.use('/api/adminLogin', ruimLoginRoutes);

//Definiendo el servidor de desarrollo para el backend
app.listen(4000, ()=>{
    console.log('Servidor funcionando en el puerto 4000');
});
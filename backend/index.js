import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";

//Iniciando express
const app = express();

dotenv.config();


//Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectado'))
    .catch(error => console.log(error));

//Probando que funcione el servidor
app.use('/' , (req,res) =>{
    res.send('Hola mundo');
})

//Definiendo el servidor de desarrollo para el backend
app.listen(4000, ()=>{
    console.log('Servidor funcionando en el puerto 4000');
});
import express from "express";

//Iniciando express
const app = express();

//Probando que funcione el servidor
app.use('/' , (req,res) =>{
    res.send('Hola mundo');
})

//Definiendo el servidor de desarrollo para el backend
app.listen(4000, ()=>{
    console.log('Servidor funcionando en el puerto 4000');
});
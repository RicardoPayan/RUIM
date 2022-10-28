import {useState, useEffect} from "react";
import axios from "axios"

const Inicio = () =>{
  
  //Solicitando cuerpo de la paginas desde el servidor
  
     useEffect(async () => {
      try{
        const url = "http://localhost:4000/api/ruimMain/"
        const cuerpoPagina = await axios(url)
      }catch(error){
        console.log(error)
      }
   }, []);
   
 
  return(
    <>
      <h1>Desde Inicio </h1>
    </>
  ) 
}

export default Inicio;
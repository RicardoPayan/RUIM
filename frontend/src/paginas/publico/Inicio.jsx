import {useState, useEffect, createContext} from "react";
import clienteAxios from "../../../config/axios.jsx";
import data from "bootstrap/js/src/dom/data.js";

const Inicio = () =>{
  
  //Solicitando cuerpo de la paginas desde el servidor

    const [cuerpoPagina, setCuerpoPagina] = useState({});

    useEffect(() =>{
        const obtenerCuerpoPagina = async  () =>{

            try {
                const config = {
                    headers: {
                        "Content-Type" : "application/json"
                    }
                }
                const {data} = await clienteAxios('/ruimMain', config);
                console.log(data)
                setCuerpoPagina(data);

            }catch (error){
                console.log(error);
            }

        }
        obtenerCuerpoPagina();
    }, [])

    const {nombreEvento, fechas,lugar, parrafo1, parrafo2} = cuerpoPagina;

  return(
    <>
      <h1> {nombreEvento}</h1>
      <p>{fechas}</p>
      <p>{lugar}</p>
      <p>{parrafo1}</p>
      <p>{parrafo2}</p>
    </>
  ) 
}

export default Inicio;
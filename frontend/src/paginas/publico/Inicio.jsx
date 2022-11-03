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

      <div class="tm-bg-white-transparent tm-intro">
                        <h1 class="tm-section-title mb-5 text-uppercase tm-color-primary">{nombreEvento}</h1>
                        <p class="tm-color-gray">
                        {parrafo1}
                        </p>
                        <p class="tm-color-gray">
                        {parrafo2}
                        </p>
                        <p>{fechas}</p>
                        <p>{lugar}</p>
                        
                    </div> 

          
    </>
  ) 
}

export default Inicio;
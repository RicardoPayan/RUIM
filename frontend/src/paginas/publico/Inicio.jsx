import {useState, useEffect, createContext} from "react";
import clienteAxios from "../../../config/axios.jsx";
import data from "bootstrap/js/src/dom/data.js";
import programa from "../../../archivos/posterPrograma/banner.png"
const Inicio = () =>{
  
  //Solicitando cuerpo de la paginas desde el servidor

    const [cuerpoPagina, setCuerpoPagina] = useState({});
    const [done, setDone] = useState(false);
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
                setCuerpoPagina(data[0]);
                setDone(true);
            }catch (error){
                console.log(error);
            }

        }
        obtenerCuerpoPagina();
    }, [])

    const {nombreEvento, fechas,lugar, parrafo1, parrafo2} = cuerpoPagina;
  return(
    <>
     {done && 
      <div className="w-100 d-flex justify-content-center">
      <div class="">
        <div className="p-5">
        <img src={programa}></img>
                        <h1 class="tm-section-title mt-3 mb-2 text-uppercase tm-color-primary">{nombreEvento}</h1> 
                        <p class="tm-color-gray">
                        {parrafo1}
                        </p>
                        <p class="tm-color-gray">
                        {parrafo2}
                        </p>
                        <p>{fechas}</p>
                        <p>{lugar}</p>
                        
        </div> 
        </div>
        </div>}
          
    </>
  ) 
}

export default Inicio;
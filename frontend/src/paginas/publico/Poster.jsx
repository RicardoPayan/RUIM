import {useState, useEffect, createContext} from "react";
import clienteAxios from "../../../config/axios.jsx";
import data from "bootstrap/js/src/dom/data.js";

const Poster = () =>{

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
                const {data} = await clienteAxios('/ruimMain/poster', config);
                console.log(data)
                setCuerpoPagina(data);

            }catch (error){
                console.log(error);
            }

        }
        obtenerCuerpoPagina();
    }, [])

    const {referencia} = cuerpoPagina;

    return(
        <>
            <div class="col-xl-6">
                <div class="tm-section-half">    
                        <div><i class="fas fa-6x fa-balance-scale mb-5 tm-section-icon"></i></div>                        
                        <h2 class="tm-section-title tm-color-primary mb-5">Poster</h2>
                        <p class="mb-5">
                    </p>
                </div>
              </div>

        </>
    )
}

export default Poster;
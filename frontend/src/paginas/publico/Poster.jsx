import {useState, useEffect, createContext} from "react";
import clienteAxios from "../../../config/axios.jsx";
import data from "bootstrap/js/src/dom/data.js";
import programa from "../../../archivos/poster/poster.png"
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
            <div className="w-100 d-flex justify-content-start">
                <div class="">   
                <div className="p-5">               
                        <h1 class="tm-section-title mb-5 text-uppercase tm-color-primary">Poster</h1>
                        <img src={programa}></img>
                    </div>
                </div>
              </div>

        </>
    )
}

export default Poster;
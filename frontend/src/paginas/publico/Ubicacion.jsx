import {useState, useEffect, createContext} from "react";
import clienteAxios from "../../../config/axios.jsx";
import data from "bootstrap/js/src/dom/data.js";
import { BsGeoAltFill } from 'react-icons/bs';


const Ubicacion = () =>{

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
                const {data} = await clienteAxios('/ruimMain/ubicacion', config);
                setCuerpoPagina(data);

            }catch (error){
                console.log(error);
            }

        }
        obtenerCuerpoPagina();
    }, [])

    const {nombreLugar,ciudad,colonia,direccion} = cuerpoPagina;

    return(
        <>
    

                <div class="col-xl-6">
                <div class="tm-section-half">    
                    <div class='logo'><BsGeoAltFill/></div>                        
                    <h2 class="tm-section-title tm-color-primary mb-5">Ubicación</h2>
                    <p class="mb-5">
                    {nombreLugar}
                    </p>
                    <p>
                    {ciudad}
                    </p>
                    <p class="mb-3">{colonia}</p>
                    <p class="mb-3">{direccion}</p>
                </div>
                </div>

                

        </>
    )
}

export default Ubicacion;
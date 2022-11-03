import {useState, useEffect, createContext} from "react";
import clienteAxios from "../../../config/axios.jsx";
import data from "bootstrap/js/src/dom/data.js";
import { BsFillTelephoneFill } from 'react-icons/bs';
const Contacto= () =>{

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
                const {data} = await clienteAxios('/ruimMain/contacto', config);
                console.log(data)
                setCuerpoPagina(data);

            }catch (error){
                console.log(error);
            }

        }
        obtenerCuerpoPagina();
    }, [])

    const {instrucciones, contacto} = cuerpoPagina

    return(
        <>
                <div class="col-xl-6">
                <div class="tm-section-half">
                    <div class='logo'><BsFillTelephoneFill/></div>
                    <h2 class="tm-section-title tm-color-primary mb-5">Contacto</h2>
                    <p class="mb-5">
                     {instrucciones}
                    </p>
                    <p>
                     {contacto}
                    </p>
                </div>
              </div>    
        </>
    )
}

export default Contacto;
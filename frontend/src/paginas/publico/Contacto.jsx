import {useState, useEffect, createContext} from "react";
import clienteAxios from "../../../config/axios.jsx";
import data from "bootstrap/js/src/dom/data.js";
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
                setCuerpoPagina(data[0]);

            }catch (error){
                console.log(error);
            }

        }
        obtenerCuerpoPagina();
    }, [])

    const {instrucciones, contacto} = cuerpoPagina

    return(
        <>
                <div className="w-100 d-flex justify-content-start">
            <div class="">   
                <div className="p-5 w-100"> 
                    <h2 class="tm-section-title tm-color-primary mb-5">CONTACTO</h2>
                    <p class="mb-3">
                     {instrucciones}
                    </p>
                    <p>
                     {contacto}
                    </p>
                </div>
              </div>    
              </div>  
        </>
    )
}

export default Contacto;
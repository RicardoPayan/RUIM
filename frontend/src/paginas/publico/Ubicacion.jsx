import {useState, useEffect, createContext} from "react";
import clienteAxios from "../../../config/axios.jsx";
import data from "bootstrap/js/src/dom/data.js";

import axios from "axios";
const Ubicacion = () =>{

    //Solicitando cuerpo de la paginas desde el servidor

    const [cuerpoPagina, setCuerpoPagina] = useState({});
    const [parse, setParse] = useState("");
    useEffect(() =>{
        const obtenerCuerpoPagina = async  () =>{

            try {
                const activeyear = await axios.get("http://localhost:4000/api/years/active");
                const config = {
                    headers: {
                        "Content-Type" : "application/json"
                    }
                }
                const {data} = await axios.post("http://localhost:4000/api/ruimMain/ubicacion", {
                    year: activeyear.data.year
                  })
                setCuerpoPagina(data);

            }catch (error){
                console.log(error);
            }

        }
        obtenerCuerpoPagina();
    }, [])

    const {nombreLugar,ciudad,colonia,direccion} = cuerpoPagina;
    const link = cuerpoPagina.link;
    return(
        <>
            <div className="w-100 d-flex justify-content-start">
            <div class="">   
                <div className="p-5 w-100">                        
                <h1 class="w-100 tm-section-title mb-5 text-uppercase tm-color-primary">Ubicación</h1>
                    <p class="">
                    {nombreLugar}
                    </p>
                    <p>
                    {ciudad}
                    </p>
                    <p class="mb-3">{colonia}</p>
                    <p class="mb-3">{direccion}</p>
                    <div className="w-100 d-flex justify-content-center">
                        <iframe 
                        width="1000" 
                        height="450"
                        src={link}></iframe>
                    </div>
                </div>
                </div>
                </div>

                

        </>
    )
}

export default Ubicacion;
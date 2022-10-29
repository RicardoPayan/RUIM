import {useState, useEffect, createContext} from "react";
import clienteAxios from "../../../config/axios.jsx";
import data from "bootstrap/js/src/dom/data.js";

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
            <h1> Ubicacion</h1>
            <p> {nombreLugar}</p>
            <p>{ciudad}</p>
            <p>{colonia}</p>
            <p>{direccion}</p>


        </>
    )
}

export default Ubicacion;
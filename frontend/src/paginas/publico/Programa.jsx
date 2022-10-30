import {useState, useEffect, createContext} from "react";
import clienteAxios from "../../../config/axios.jsx";
import data from "bootstrap/js/src/dom/data.js";

const Programa = () =>{

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
                const {data} = await clienteAxios('/ruimMain/programa', config);
                console.log(data)
                setCuerpoPagina(data);

            }catch (error){
                console.log(error);
            }

        }
        obtenerCuerpoPagina();
    }, [])

    const {posterReferencia} = cuerpoPagina;

    return(
        <>
            <h1> Programa</h1>
            <img src={`../../../archivos/posterPrograma/${posterReferencia}`}/>

        </>
    )
}

export default Programa;
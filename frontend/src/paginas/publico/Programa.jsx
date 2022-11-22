import {useState, useEffect, createContext} from "react";
import clienteAxios from "../../../config/axios.jsx";
import data from "bootstrap/js/src/dom/data.js";
import axios from "axios";
import { useParams } from "react-router-dom";
const Programa = () =>{

    //Solicitando cuerpo de la paginas desde el servidor
    let {year} = useParams();
    const [cuerpoPagina, setCuerpoPagina] = useState({});
    const [programa, setPrograma] = useState("");
    useEffect(() =>{
        const obtenerCuerpoPagina = async  () =>{

            try {
                const activeyear = await axios.get("http://localhost:4000/api/years/active");
                const config = {
                    headers: {
                        "Content-Type" : "application/json"
                    }
                }
                if(year==null){
                    year = activeyear.data.year;
                  }
                const {data} = await axios.post("http://localhost:4000/api/ruimMain/programa", {
                    year: year
                  })
                console.log(data)
                setCuerpoPagina(data);
                setPrograma(data.posterReferencia);
                console.log(programa);
            }catch (error){
                console.log(error);
            }

        }
        obtenerCuerpoPagina();
        
    }, [])

    const {posterReferencia} = cuerpoPagina;

    return(
        <>
             <div className="w-100 d-flex justify-content-start">
                <div class="">   
                <div className="p-5">               
                        <h1 class="tm-section-title mb-5 text-uppercase tm-color-primary">Programa</h1>
                        <img src={programa}></img>
                    </div>
                </div>
              </div>
        </>
    )
}

export default Programa;
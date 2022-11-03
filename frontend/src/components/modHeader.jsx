import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ModInicio from "./modInicio.jsx"
import ModPoster from "./modPoster.jsx"
import ModPrograma from "./modPrograma.jsx";
import ModUbicacion from "./modUbicacion.jsx";
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom";
function ModHeader () {
    return(
        <>
    <Tabs
      defaultActiveKey="Inicio"
      transition={false}
      className="mb-3 mt-3 ms-4 ps-3">
        <Tab eventKey="Inicio" title="Inicio">
            <ModInicio/>
        </Tab>
        <Tab eventKey="Poster" title="Poster">
            <ModPoster/>
        </Tab>
        <Tab eventKey="Programa" title="Programa">
           <ModPrograma/>
        </Tab>
        <Tab eventKey="Ubicacion" title="Ubicacion">
           <ModUbicacion/>
        </Tab>
    </Tabs>
        </>)
}

export default ModHeader;
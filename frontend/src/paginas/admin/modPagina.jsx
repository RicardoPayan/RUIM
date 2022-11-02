import React, { useEffect, useState } from "react";
import ModHeader from "../../components/modHeader.jsx";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import ModInicio from "../../components/modInicio.jsx"
import ModPoster from "../../components/modPoster.jsx"
import ModPrograma from "../../components/modPrograma.jsx";
import ModUbicacion from "../../components/modUbicacion.jsx";
function ModPagina(){
    return(
        <>
            <ModHeader/>
            <div className="w-100">
                <Routes>
                    <Route exact path ="/inicio" element = {<ModInicio/>}/>
                    <Route exact path ="/poster" element = {<ModPoster/>}/>
                    <Route exact path ="/programa" element = {<ModPrograma/>}/>
                    <Route exact path ="/ubicacion" element = {<ModUbicacion/>}/>
                </Routes>
            </div>
        </>
        );
}

export default ModPagina;
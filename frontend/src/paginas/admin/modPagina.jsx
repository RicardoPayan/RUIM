import React, { useEffect, useState } from "react";
import ModHeader from "../../components/modHeader.jsx";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import ModInicio from "../../components/modInicio.jsx"
function ModPagina(){
    return(
        <>
            <ModHeader/>
            <div className="w-100">
                <Routes>
                    <Route exact path ="/inicio" element = {<ModInicio/>}/>
                </Routes>
            </div>
        </>
        );
}

export default ModPagina;
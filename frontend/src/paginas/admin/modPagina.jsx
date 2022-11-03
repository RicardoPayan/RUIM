import React, { useEffect, useState } from "react";
import ModHeader from "../../components/modHeader.jsx";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Title from "../../components/title.jsx"
function ModPagina(){
    return(
        <>
            <Title title="Modificar sitio público"/>
            <ModHeader/>
        </>
        );
}

export default ModPagina;
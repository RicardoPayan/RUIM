import {Outlet} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminLogin from '../paginas/login.jsx'
import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
const RuimAdminLayout = () =>{
    const [token, setToken] = useState("n");
    if(token=="n"){
        return <AdminLogin setToken={setToken}/>
    }

    return(
        <div className="App w-100 h-100">
            <h1>Admin Page</h1>
            <Outlet />
        </div>
    ) 
}

export default RuimAdminLayout;
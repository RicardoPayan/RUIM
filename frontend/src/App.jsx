import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RuimMainLayout from './layouts/RuimMainLayout';
import RuimAdminLayout from './layouts/RuimAdminLayout';
import './app.css';

import Registro from './paginas/publico/registro'

import Inicio from "./paginas/publico/Inicio.jsx";
import Programa from "./paginas/publico/Programa.jsx";
import Poster from "./paginas/publico/Poster.jsx";
import Ubicacion from "./paginas/publico/Ubicacion.jsx";
import Contacto from "./paginas/publico/Contacto.jsx";
import Lista from "./paginas/admin/lista.jsx"
import AdminLogin from './paginas/admin/login'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<RuimMainLayout />}>
            <Route index element={<Inicio />}/>

            <Route path="/registro" element = {<Registro/>}/>

            <Route path="/programa"  element={<Programa />}/>
            <Route path="/poster"  element={<Poster />}/>
            <Route path="/ubicacion"  element={<Ubicacion />}/>
            <Route path="/contacto"  element={<Contacto />}/>

        </Route>
        <Route path="/admin/*" element={<RuimAdminLayout/>}>
        </Route>
      </Routes>

   </BrowserRouter>
  )
}

export default App

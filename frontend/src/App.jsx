import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RuimMainLayout from './layouts/RuimMainLayout';
import RuimAdminLayout from './layouts/RuimAdminLayout';
import Inicio from './paginas/Inicio';
import Registro from './paginas/registro'
import AdminLogin from './paginas/login'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<RuimMainLayout />}>
            <Route index element={<Inicio />}/>
            <Route path="/registro" element = {<Registro/>}/>
        </Route>
        <Route path="/admin" element={<RuimAdminLayout />}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App

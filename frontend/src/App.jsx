import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RuimMainLayout from './layouts/RuimMainLayout';
import RuimAdminLayout from './layouts/RuimAdminLayout';
import Inicio from './paginas/Inicio';
import AdminLogin from './paginas/login'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<RuimMainLayout />}>
            <Route index element={<Inicio />}/>
        </Route>
        <Route path="/admin" element={<RuimAdminLayout />}>

        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App

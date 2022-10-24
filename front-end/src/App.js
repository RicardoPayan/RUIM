import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/Pages/Inicio';
import Ubicacion from './components/Pages/Ubicacion';
import Calendario from './components/Pages/Calendario';
import Avisos from './components/Pages/Avisos';
import Memorias from './components/Pages/Memorias';
import Organizacion from './components/Pages/Organizacion';
import Plantilla from './components/Pages/Plantilla';


function App() {
  return (
    
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/ubicacion" element={<Ubicacion/>}/>
          <Route path="/calendario" element={<Calendario/>}/>
          <Route path="/avisos" element={<Avisos/>}/>
          <Route path="/memorias" element={<Memorias/>}/>
          <Route path="/organizacion" element={<Organizacion/>}/>
          <Route path="/plantilla" element={<Plantilla/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
    
  );
}

export default App;

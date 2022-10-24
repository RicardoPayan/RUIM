import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/Pages/Inicio';
import Ubicacion from './components/Pages/Ubicacion';


function App() {
  return (
    
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/ubicacion" element={<Ubicacion/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
    
  );
}

export default App;

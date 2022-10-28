import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RuimMainLayout from './layouts/RuimMainLayout';
import Inicio from './paginas/Inicio';



function App() {
  

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<RuimMainLayout />}>
            <Route index element={<Inicio />}/>
        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App

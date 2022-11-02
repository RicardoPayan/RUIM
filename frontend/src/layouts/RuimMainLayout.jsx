import {Outlet} from 'react-router-dom'
import Header from '../components/Header';

const RuimMainLayout = () =>{
  return(
    <>
    <Header/>
      <h1>Desde RuinMainLayout </h1>
      <Outlet />
    </>
  ) 
}

export default RuimMainLayout;
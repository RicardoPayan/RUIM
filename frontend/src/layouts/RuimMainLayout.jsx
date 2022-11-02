import { Container } from 'react-bootstrap';
import {Outlet} from 'react-router-dom'
import Header from '../components/Header';


const RuimMainLayout = () =>{
  return(
    <Container fluid className="ms-0 h-100 ps-0">
    <Header/>
      <Outlet/>
    </Container>
  ) 
}

export default RuimMainLayout;
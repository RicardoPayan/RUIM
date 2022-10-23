import React from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const App = () => {
  return (
    <>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link as={Link} to={`/`}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to={`registro`}>
            Pagina de Registro
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;

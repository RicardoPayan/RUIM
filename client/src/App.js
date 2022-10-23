import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`registro`}>Pagina de Registro</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;

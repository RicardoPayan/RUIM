import React from "react";

const SeccionAvisos = () => {
  return <div>Seccion de Avisos.</div>;
};

const FechasLimite = () => {
  return <div>Fechas Limites.</div>;
};

const InformacionGeneral = () => {
  return (
    <div>
      <h1>Partipacion como ponente: ...</h1>
      <h1>Partipacion como carte: ...</h1>
    </div>
  );
};
const PaginaRegistros = () => {
  return (
    <div>
      <div>Registro de Trabajos</div>

      <SeccionAvisos />

      <FechasLimite />

      <InformacionGeneral />
    </div>
  );
};

export default PaginaRegistros;

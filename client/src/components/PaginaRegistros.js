import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const SeccionAvisos = () => {
  return (
    <div>
      <Container className="text center">
        <h1 className="jumbotron-heading">Avisos</h1>
        <p className="lead text-muted">
          Muchas Gracias por su interés en formar parte de la XXV Reunión
          Universitaria de Investigación en Materiales (RUIM 2022)
        </p>
        <FechasLimite />
      </Container>
    </div>
  );
};

const FechasLimite = () => {
  return (
    <div>
      <Alert variant="success">
        <Alert.Heading> Fecha límite para el envío de trabajos:</Alert.Heading>
        <hr />
        <p className="mb-0">Lunes 24 de Octubre</p>
      </Alert>
    </div>
  );
};

const InformacionGeneral = () => {
  return (
    <div>
      <Container>
        <h2>Participación como ponente</h2>
        <p>Las formas de Participación en la RUIM 2022 son las siguientes:</p>
        <ListGroup>
          <ListGroup.Item>Pláticas Invitadas</ListGroup.Item>
          <ListGroup.Item>Posters</ListGroup.Item>
        </ListGroup>
        <p>
          Las participaciones, tanto en formato de plática como de Póster, se
          deberán enviar haciendo clic AQUI (Formulario de Registro).
        </p>
        <p>
          Formato para Resumen El formato del Resumen es igual para las dos
          formas de participación y la extensión es de una o dos cuartillas
          siguiendo la plantilla en formato Word 2010 y posteriores (*.docx), la
          cual está disponible
          <span>
            <Button variant="link">
              <Link to={`/forms`}>AQUI</Link>
            </Button>
          </span>
        </p>
        <h2>Constancias de participación</h2>
        <p>
          Se extenderán Constancias de Participación en los siguientes formatos:
          Plática Invitada (Constancia de Plática Invitada); Poster (Constancia
          de Presentación de Cartel).
        </p>
      </Container>
    </div>
  );
};

const PaginaRegistros = () => {
  return (
    <div>
      <div id="Titulo">Registro de Trabajos</div>

      <SeccionAvisos />

      <InformacionGeneral />
    </div>
  );
};

export default PaginaRegistros;

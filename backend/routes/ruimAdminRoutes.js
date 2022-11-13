import express from "express";
import {
        resumenDashboard,
        obtenerRegistros,
        obtenerRegistrosFiltrados,
        editarEstadoRegistro,
        editarPaginaInicio,
        editarPaginaContacto,
        editarPaginaUbicacion,
        editarPaginaPoster,
        editarPaginaPrograma,
} from "../controllers/ruimAdminControllers.js";

const router = express.Router();


 router.get('/', resumenDashboard);

//Filtros para registros
router.get('/registros-todos', obtenerRegistros);
router.post('/registros-filtrados', obtenerRegistrosFiltrados);

//Cambiar estado de registro
router.post('/editar-estado', editarEstadoRegistro);


//Edicion de paginas
router.post('/edit-pagina-inicio',editarPaginaInicio);
router.post('/edit-pagina-poster',editarPaginaPoster);
router.post('/edit-pagina-programa',editarPaginaPrograma);
router.post('/edit-pagina-contacto',editarPaginaContacto);
router.post('/edit-pagina-ubicacion',editarPaginaUbicacion);

export default router;
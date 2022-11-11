import express from "express";
import {
        obtenerRegistros,
        obtenerRegistrosFiltrados,
        editarPaginaInicio,
        editarPaginaContacto,
        editarPaginaUbicacion,
        editarPaginaPoster,
        editarPaginaPrograma,
} from "../controllers/ruimAdminControllers.js";

const router = express.Router();

//todo El dashboard sera la pagina principal de esta seccion de rutas
// router.get('/', dashBoard);

//Filtros para registros
router.get('/registros-todos', obtenerRegistros);
router.post('/registros-filtrados', obtenerRegistrosFiltrados);


//Edicion de paginas
router.post('/edit-pagina-inicio',editarPaginaInicio);
router.post('/edit-pagina-poster',editarPaginaPoster);
router.post('/edit-pagina-programa',editarPaginaPrograma);
router.post('/edit-pagina-contacto',editarPaginaContacto);
router.post('/edit-pagina-ubicacion',editarPaginaUbicacion);

export default router;
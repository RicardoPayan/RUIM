import express from "express";
import {obtenerRegistros,
        editarPaginaInicio,
        editarPaginaContacto,
        editarPaginaUbicacion,
        editarPaginaPoster,
        editarPaginaPrograma
} from "../controllers/ruimAdminControllers.js";

const router = express.Router();

//todo El dashboard sera la pagina principal de esta seccion de rutas
// router.get('/', dashBoard);

router.get('/registros', obtenerRegistros);

//Edicion de paginas
router.post('/edit-pagina-inicio',editarPaginaInicio);
router.post('/edit-pagina-poster',editarPaginaPoster);
router.post('/edit-pagina-programa',editarPaginaPrograma);
router.post('/edit-pagina-contacto',editarPaginaContacto);
router.post('/edit-pagina-ubicacion',editarPaginaUbicacion);

export default router;
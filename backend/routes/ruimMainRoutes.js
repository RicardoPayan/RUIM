import express from "express";
import {
    obtenerPaginaInicio,
    obtenerPaginaUbicacion,
    obtenerPaginaPrograma,
    obtenerPaginaContacto,
    obtenerPaginaPoster}
    from "../controllers/ruimMainControllers.js";

const router = express.Router();

//TODO Pagina del poster

router.get('/', obtenerPaginaInicio);
router.get('/programa', obtenerPaginaPrograma );
router.get('/poster', obtenerPaginaPoster );
router.get('/contacto', obtenerPaginaContacto);
router.get('/ubicacion', obtenerPaginaUbicacion);

export default router;
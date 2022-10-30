import express from "express";
import {
    obtenerPaginaInicio,
    obtenerPaginaUbicacion,
    obtenerPaginaPrograma,
    obtenerPaginaContacto,
    obtenerPaginaPoster,
    registrarParticipacion}
    from "../controllers/ruimMainControllers.js";

const router = express.Router();


router.get('/', obtenerPaginaInicio);
router.get('/programa', obtenerPaginaPrograma );
router.get('/poster', obtenerPaginaPoster );
router.get('/contacto', obtenerPaginaContacto);
router.get('/ubicacion', obtenerPaginaUbicacion);
router.post('/registro', registrarParticipacion);

export default router;
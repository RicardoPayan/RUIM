import express from "express";
import {
    obtenerPaginaInicio,
    obtenerPaginaUbicacion}
    from "../controllers/ruimMainControllers.js";

const router = express.Router();

router.get('/', obtenerPaginaInicio);
router.get('/ubicacion', obtenerPaginaUbicacion);

export default router;
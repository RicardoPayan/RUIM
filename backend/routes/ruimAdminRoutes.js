import express from "express";
import {obtenerRegistros} from "../controllers/ruimAdminControllers.js";

const router = express.Router();

//todo El dashboard sera la pagina principal de esta seccion de rutas
// router.get('/', dashBoard);

router.get('/registros', obtenerRegistros);

export default router;
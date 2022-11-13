import express from "express";
import path from "path";
import {
        obtenerRegistros,
        obtenerRegistrosFiltrados,
        editarPaginaInicio,
        editarPaginaContacto,
        editarPaginaUbicacion,
        editarPaginaPoster,
        editarPaginaPrograma,
        guardarPrograma
} from "../controllers/ruimAdminControllers.js";
import multer from "multer";
const router = express.Router();

//todo El dashboard sera la pagina principal de esta seccion de rutas
// router.get('/', dashBoard);

//Filtros para registros
router.get('/registros-todos', obtenerRegistros);
router.post('/registros-filtrados', obtenerRegistrosFiltrados);

var storage = multer.diskStorage({
        destination: (req, file, callBack) => {
            callBack(null, './uploads/programas/')    
        },
        filename: (req, file, callBack) => {
            callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
    })
    var upload = multer({
        storage: storage
    });

//Edicion de paginas
router.post('/edit-pagina-inicio',editarPaginaInicio);
router.post('/edit-pagina-poster',editarPaginaPoster);
router.post('/edit-pagina-programa',editarPaginaPrograma);
router.post('/edit-pagina-contacto',editarPaginaContacto);
router.post('/edit-pagina-ubicacion',editarPaginaUbicacion);
router.post('/save-programa', upload.single('programa'), guardarPrograma);

export default router;
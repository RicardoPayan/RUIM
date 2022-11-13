import express from "express";
import path from "path";
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
        guardarPrograma
} from "../controllers/ruimAdminControllers.js";
import multer from "multer";
const router = express.Router();


 router.get('/', resumenDashboard);

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

//Cambiar estado de registro
router.post('/editar-estado', editarEstadoRegistro);



//Edicion de paginas
router.post('/edit-pagina-inicio',editarPaginaInicio);
router.post('/edit-pagina-poster',editarPaginaPoster);
router.post('/edit-pagina-programa',editarPaginaPrograma);
router.post('/edit-pagina-contacto',editarPaginaContacto);
router.post('/edit-pagina-ubicacion',editarPaginaUbicacion);
router.post('/save-programa', upload.single('programa'), guardarPrograma);
export default router;
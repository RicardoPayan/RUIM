import express from "express";
import {handleLogin} from "../controllers/ruimLoginControllers.js"
const router = express.Router();


router.post('/', handleLogin);

export default router;
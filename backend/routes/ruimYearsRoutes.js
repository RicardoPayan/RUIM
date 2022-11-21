import express from "express";
import { ActiveYear, AddYear, SelectYears, ChangeActive } from "../controllers/ruimYearsController.js";
const router = express.Router();

router.post('/', AddYear);
router.get('/', SelectYears);
router.get('/active', ActiveYear);
router.post('/change-active', ChangeActive);
export default router;
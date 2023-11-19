import express from "express";
import {RegisterEtu,registerEns} from "../controllers/user.js"
import { LoginEtudiant ,ArchiveEtudiant,UpdateEtudiant,UpdateEnseignant} from "../controllers/user.js";
import { verifyToken } from "../middelware/VerifyToken.js";
const router = express.Router();
router.post('/LoginEtudiant', LoginEtudiant);
router.post('/ArchiveEtudiant/:id', ArchiveEtudiant);
router.post('/RegisterEtu',RegisterEtu);
router.post('/registerEns', registerEns);
router.post('/UpdateEtudiant/:id', UpdateEtudiant);
router.post('/UpdateEnseignant/:id', UpdateEnseignant);
export default router;
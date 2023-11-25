import express from "express";

import {RegisterEtu,registerEns,login  ,registerAdm,ArchiveEtudiant,UpdateEtudiant,UpdateEnseignant,ArchiveEns,SubjectsGrades,ajoutMatiere} from "../controllers/user.js";
import { verifyToken } from "../middelware/VerifyToken.js";
const router = express.Router();
router.post('/login', login);
router.post('/ArchiveEtudiant/:id', ArchiveEtudiant);
router.post('/ArchiveEns/:id_ens', ArchiveEns);
router.post('/RegisterEtu',RegisterEtu);
router.post('/registerAdm',registerAdm);
router.post('/registerEns', registerEns);
router.post('/UpdateEtudiant/:id', UpdateEtudiant);
router.post('/UpdateEnseignant/:id', UpdateEnseignant);
router.get('/students/:id/subjects-and-grades',SubjectsGrades);
router.post('/ajoutMatiere',ajoutMatiere);
export default router;
import express from "express";

import {RegisterEtu,registerEns,login ,StudentsGrades,ajoutNote,getMatiere,getEns,getEnsById,getEtu ,getMatiereById,getEtuById,registerAdm,ArchiveEtudiant,UpdateEtudiant,UpdateEnseignant,ArchiveEns,SubjectsGrades,ajoutMatiere,editMatiere,moyenne,teachersProfil, ProfilEtud,ArchiveMatiere} from "../controllers/user.js";
import { verifyToken } from "../middelware/VerifyToken.js";
const router = express.Router();
router.post('/login', login);
router.post('/ArchiveEtudiant/:id', ArchiveEtudiant);
router.post('/ArchiveEns/:id_ens', ArchiveEns);
router.post('/RegisterEtu',RegisterEtu);
router.post('/registerAdm',registerAdm);
router.post('/registerEns', registerEns);
router.post('/UpdateEtudiant/:id', UpdateEtudiant);
router.post('/UpdateEnseignant/:id_ens', UpdateEnseignant);
router.get('/students/:id/subjects-and-grades',SubjectsGrades);
router.post('/ajoutMatiere',ajoutMatiere);
router.post('/editMatiere/:id_matiere',editMatiere);
router.get('/moyenne',moyenne);
router.post('/ajoutNote',ajoutNote);
router.get('/AffichageEnseignant/:id_ens',StudentsGrades);
router.get('/teachersProfil/:id', teachersProfil);
// router.post('/sendEmailNotification', sendEmailNotification);
// router.post('/sendNotifications', sendNotifications);
router.get('/ProfilEtud/:id',ProfilEtud);
router.get('/getMatiere',getMatiere);
router.get('/getMatiereById/:id', getMatiereById);
router.post('/ArchiveMatiere/:id_matiere', ArchiveMatiere);
router.get('/getEns', getEns);
router.get('/getEnsById/:id_ens', getEnsById);
router.get('/getEtu', getEtu);
router.get('/getEtuById/:id', getEtuById);
export default router;
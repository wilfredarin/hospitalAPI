import express from "express"

import { patientRegisteration,createReport,getReport } from "../patient/patient.controller.js"

const router = express.Router();
router.route("/register").post(patientRegisteration);
router.route("/:id/create_report").post(createReport);
router.route("/:id/all_reports").get(getReport);

export default router;
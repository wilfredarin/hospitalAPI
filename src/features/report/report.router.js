import express from "express"

import {getAllReport } from "./report.controller.js"

const router = express.Router();
router.route("/:status").get(getAllReport);
export default router;
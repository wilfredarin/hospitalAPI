import express from "express"

import { userRegisteration,userLogin } from "./user.controller.js"

const router = express.Router();
router.route("/register").post(userRegisteration);
router.route("/login").post(userLogin);

export default router;
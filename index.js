import dotenv from "dotenv"
dotenv.config()
import express from "express"

import userRouter from "./src/features/user/user.router.js"
import patientRouter from "./src/features/patient/patient.router.js"
import reportRouter from "./src/features/report/report.router.js"
import { jwtAuth } from "./src/middlewares/auth.middleware.js"





const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",()=>{
    res.json({"name":"hospitalApp"});
})
app.use("/doctors",userRouter);
app.use("/patients",jwtAuth,patientRouter);
app.use("/reports",jwtAuth,reportRouter);
export default app;
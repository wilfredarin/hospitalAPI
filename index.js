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

app.get("/",(req,res)=>{
    res.json({
        "Register a Doctor": "/doctors/register",
        "Doctor Login": "/doctors/login",
        "Register a Patient": "/patients/register",
        "Create a Report for a Patient": "/patients/:id/create_report",
        "List All Reports of a Patient": "/patients/:id/all_reports",
        "List All Reports by Status": "/reports/:status"
      });
})
app.use("/doctors",userRouter);
app.use("/patients",jwtAuth,patientRouter);
app.use("/reports",jwtAuth,reportRouter);
export default app;
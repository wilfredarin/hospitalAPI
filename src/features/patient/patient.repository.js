import mongoose from "mongoose";
// import { userSchema } from "../user/user.schema.js";
import { patientSchema } from "./patient.schema.js";
import { reportSchema } from "../report/report.schema.js";
const PatientModel = mongoose.model("Patient",patientSchema);
const reportModel = mongoose.model("Report",reportSchema);


export const patientRegisterationRepo = async(data)=>{
    try{
        var {username,name} = data
        const newUser = new PatientModel({username:username,name:name});
        await newUser.save();
        return {success:true,msg:newUser}
    }catch(error){
        if(error.code=="11000"){
            const user = await PatientModel.findOne({username});
            return {success:true,msg:user}
        }

        return {success:false,err:{statusCode:400,msg:error}}
    }
}


export const createReportRepo = async(data) =>{
    //checkif the id exists 
    try{
       
        const patient = await PatientModel.findOne({_id:data.patient_id});
        if(patient){
            //if patient exist - create report
            const report = new reportModel(data);
            await report.save();
            patient.reports.push(report._id);
            await patient.save();
            return {success:true,msg:report}
        }else{
            return {success:false,err:{statusCode:404,msg:"Patient not registered"}}
        }
    }catch(error){
        return {success:false,err:{statusCode:400,msg:error}}
    }
}


export const getReportRepo = async(id)=>{
    //check if patienid exists 
    try{
        const patient = await PatientModel.findOne({_id:id});
        if(patient){
            const output = await PatientModel.findOne({_id:id}).populate("reports");
            const reports = output.reports.reverse();
            console.log(reports)
            return {success:true,msg:reports}
        }else{
            return {success:false,err:{statusCode:404,msg:"Patient not registered"}}
        }
    }catch(error){
        return {success:false,err:{statusCode:400,msg:error}}
    }
}
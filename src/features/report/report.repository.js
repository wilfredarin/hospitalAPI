import mongoose from "mongoose"
import { reportSchema } from "../report/report.schema.js";
const reportModel = mongoose.model("Report",reportSchema);

export const getAllReportRepo = async(status)=>{
    //check if status is valid
    const status_option = ["Negative", "Travelled-Quarantine", "Symptoms-Quarantine",
    "Positive-Admit"]
    const isPres = status_option.includes(status)
    console.log(isPres,status)
    if(isPres){
        try{
            const report = await reportModel.find({status});
            console.log(report);
            return {success:true,msg:report}
        }catch(error){
            return {success:false,err:{statusCode:400,msg:error}}
        }
        
    }else{
        return {success:false,err:{statusCode:400,msg:"Enter a valid status"}}
    }
}
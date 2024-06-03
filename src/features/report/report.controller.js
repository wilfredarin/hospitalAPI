import {getAllReportRepo} from "./report.repository.js"

export const getAllReport = async(req,res,next)=>{
    const status = req.params.status;
    console.log(status)
    const resp = await getAllReportRepo(status);
    if(resp.success){
        res.json(resp.msg)
    }else{
        res.json(resp.err.msg)
    }
}
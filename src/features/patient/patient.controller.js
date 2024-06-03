import { patientRegisterationRepo,createReportRepo,getReportRepo} from "./patient.repository.js";



export const  patientRegisteration = async(req,res,next)=>{
    const resp = await patientRegisterationRepo({...req.body})
    if(resp.success){
        res.json(resp.msg)
    }else{
        res.json(resp.err.msg)
    }
}


export const createReport = async(req,res,next)=>{
    const patient_id = req.params.id;
    const status  = req.body.status;
    const creator_id = req.id;

    console.log("crator",creator_id);
    // patient_id:id,status:data.status, creator_id:data.creator_id
    const resp = await createReportRepo({patient_id,status,creator_id});
    if(resp.success){
        res.json(resp.msg)
    }else{
        res.json(resp.err.msg)
    }
}

export const getReport = async(req,res,next)=>{
    const patient_id = req.params.id;
    const resp = await getReportRepo(patient_id);
    if(resp.success){
        res.json(resp.msg)
    }else{
        res.json(resp.err.msg)
    }
}
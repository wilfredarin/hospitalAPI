
import { userRegisterationRepo,userLoginRepo } from "./user.repository.js";
import bcypt from "bcrypt"
import jwt from  "jsonwebtoken"

export const userRegisteration = async(req,res,next)=>{
    let {password} = req.body;
    password = await bcypt.hash(password,12);
    const resp = await userRegisterationRepo({...req.body,password})
    if(resp.success){
        res.json(resp.msg)
    }else{
        res.json(resp.err.msg)
    }
}

export const userLogin = async(req,res,next)=>{
    console.log("Sss")
    const resp  = await userLoginRepo(req.body);
    console.log("Sss",resp)
    if(resp.success){
        
        const payload = {username:resp.msg.username,id:resp.msg._id}
        const token = jwt.sign(payload,process.env.SECRET_KEY,{'expiresIn':'1h'});
        res.json({token});
    }
    else{
        res.json(resp.err.msg);
    }
}
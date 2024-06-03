import mongoose from "mongoose";
import { userSchema } from "./user.schema.js";
import bcrypt from "bcrypt"
const UserModel = mongoose.model("User",userSchema);


export const userRegisterationRepo = async(data)=>{
    try{
        const newUser = new UserModel(data);
        await newUser.save();
        return {success:true,msg:newUser}
    }catch(err){
        return {success:false,err:{statusCode:400,msg:err}}
    }
};

export const userLoginRepo = async(data) => {
    try{
        const {username,password} = data;
        if(!username|| !password){
            return {success:false,err:{statusCode:404,msg:"need username and password"}} 
        }
        const user = await UserModel.findOne({username});
        if(!user){
            return {success:false,err:{statusCode:404,msg:"user not found!"}} 
        }
        else
        {
            console.log(password,username,user.password,"Sasasas")
            const pwdValidation = await bcrypt.compare(password,user.password);
            if(pwdValidation){
                return {success:true,msg:user}
            }else{
                return {success:false,err:{statusCode:400,msg:"invalid pwd"}}
            }
    }
}catch(err){
    return {success:false,err:{statusCode:400,msg:err}}
}
}
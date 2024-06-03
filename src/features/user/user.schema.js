import mongoose from "mongoose";

export const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },
    name:{
        type:String,
        required:true,
    }
})
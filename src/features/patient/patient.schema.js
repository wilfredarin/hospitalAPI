import mongoose from "mongoose";

export const patientSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
   
    name:{
        type:String,
        required:true,
    },
    reports:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Report"
        }
]
})
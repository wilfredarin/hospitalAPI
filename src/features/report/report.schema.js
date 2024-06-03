import mongoose from "mongoose";

export const reportSchema = new mongoose.Schema({
    patient_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        required:true
    },
    creator_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    time:{
        type:Date,
        default:Date.now(),
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:["Negative", "Travelled-Quarantine", "Symptoms-Quarantine",
            "Positive-Admit"]
    }
})
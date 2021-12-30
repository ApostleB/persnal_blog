import mongoose from "mongoose";

const systemSchema = new mongoose.Schema({
    content: { type:String, require:true},
    type: { type:String, require:true},
    inUsePlace: { type:String, },
    createUser:{type:String, require: true},
    imageUrl:{type:String, default:null},
})

const System = mongoose.model("System", systemSchema);

export default System;
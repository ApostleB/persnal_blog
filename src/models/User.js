import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type:String, require:true, unique:true},
    nickName:{ type:String, require:true },
    name: { type: String, require: true },
    password: { type: String, require: true },
    socialOnly: {type:Boolean, default:false},
    admin:{type:String, require:true, default:null},
    location: String,
    imageUrl: { type: String, default: null },
});

const User = mongoose.model("User", userSchema);

export default User;

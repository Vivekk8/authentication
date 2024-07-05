
const mongoose =require("mongoose");
const {v4:uuidv4}=require('uuid');

let uuid =uuidv4();
const id= uuid.substring(0,10);

const registerSchema= new mongoose.Schema({
    userName:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    userId:{
        type:String,
        default:id
    },
    token:{
        type:String,
    },
});

const register =mongoose.model("user",registerSchema);

module.exports =register;
const express= require("express");
const router =express.Router();
const {userRegister}=require('../controller/register.js')


const login=require('../controller/login.js')



router.post("/reg",userRegister);
router.post("/login",login);



module.exports =router;
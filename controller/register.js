const register=require('../model/userSchema.js');
const bcrypt=require("bcrypt");
const { model } = require('mongoose');
const nodemailer=require('nodemailer')


// this code is for Registration

const userRegister = async (req, res) => {
    try {
      const { userName, email, password } = req.body;
      const value = await register.findOne({ email: email });
  
      if (value) {
        res.json({
          Message: "Mail I'd already exist....",
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const saveUserData = new register({ 
        userName: userName,
        email: email,
        password: hashedPassword,
        
      });
  
      await saveUserData.save();
      await sendMailToUser(email,userName);
  
      res.json({
        Data: saveUserData,
        Message: "Register successfully....",
      });
    } catch (error) {
      console.log("error", error);
      res.json({
        Error: error.message,
      });
    }
  };
  const sendMailToUser = async (email,name) => {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "serivcemail999@gmail.com",
          pass: "aenx dbvb owfd usnc",
        },
      });
  
      const mailOptions = {
        from: "serivcemail999@gmail.com",
        to: email,
        subject: "Welcome to Authentication system ",
        text: `hello ${name}, This is your email verify the mail id.`,
      };
  
      await transporter.sendMail(mailOptions);
  
      console.log("Mail sent successfully...");
    } catch (error) {
      console.log(`Error : ${error.message}`);
    }
  };

  


  module.exports={
    userRegister,
  }
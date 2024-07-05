const mongoose = require("mongoose");

const connection = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(
        ()=>{
            console.log("MongoDB is Connected...");
        }
    )
    .catch((err)=>{
        console.log("Connection Error :", err.message);
    })
}

module.exports = connection;
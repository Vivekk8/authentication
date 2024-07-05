const express = require('express');
const connect = require("./connect/connection.js")
const authRoute = require("./routes/authRoute.js")
require("dotenv").config()


const app = express();

app.use(express.json());

app.use(authRoute);

connect();

app.use("/u", (req, res)=>{
    res.send("Running Successfully...")
});

const Port = 5000;

app.listen(Port, ()=>{
    console.log("Server is running on : " , Port);
});
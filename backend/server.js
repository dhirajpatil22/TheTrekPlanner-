const express=require('express');
const userRouter = require('./Routes/userRoute');
require("dotenv").config();
const mongoose=require("mongoose");
const app=express();
//middleware
app.use(express.json());
app.use("/user",userRouter);
app.get("/",(req,res)=>{
    res.send("Getting the data");
})

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`).then(()=>{
    console.log("Database connected...")

}).catch((err)=>{
    console.log(err);
})

app.listen(process.env.PORT,()=>{
    console.log(`app is listening on port ${process.env.PORT}`);
})
const express=require('express');
const userRouter = require('./Routes/userRoute');
require("dotenv").config();
const mongoose=require("mongoose");
const app=express();
const jwt = require('jsonwebtoken');
//middleware
app.use(express.json());
const cors=require('cors');
const trekRouter = require('./Routes/trekRouter');
app.use(cors('*'))
app.get("/",(req,res)=>{
    res.send("Getting the data");
})
app.use((req,res,next)=>{
    console.log(`midlle ware is getting called..`);
    console.log(req.url,"DDGFG")
    if(req.url.includes('/user/signin')||req.url.includes('/user/signup')|| req.url.includes('/user/adminSignup')){
        console.log("inside if")
        //token verification not needed call to the next function
        next()
    }
    else{
       console.log(req,"REQQQQQ")
        const token = req.headers["authorization"];
   
        if(token){
            try{
                
                const data = jwt.verify(token, process.env.JWT_KEY);//returns payload 
                req.userId=data.id//setting userId object in req body 
                next()
            }
            catch(exe){
                res.status(401);
                res.send("unauthorize:invalid token");
            }
            
        }
        else{
            //unauthorized
            res.status(401);
            res.send('unauthorize:missing token')
        }
        
    }
})
app.use("/user",userRouter);
app.use("/trek",trekRouter);

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`).then(()=>{
    console.log("Database connected...")

}).catch((err)=>{
    console.log(err);
})




app.listen(process.env.PORT,()=>{
    console.log(`app is listening on port ${process.env.PORT}`);
})
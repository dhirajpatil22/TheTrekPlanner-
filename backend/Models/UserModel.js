const mongoose=require("mongoose");
const userSchema= new mongoose.Schema({
    uuid:{
        type:String,

    },
    name:{
        type:String,
        required:true
        
    },
    
    email:{
        type:String,
        required:true
        
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        
    },
    address:{
        type:Number,
        
    },
    userRoles:{
        type:[String],
        default:"user"
    },
    

})
const userModel=mongoose.model("user",userSchema);
module.exports=userModel;


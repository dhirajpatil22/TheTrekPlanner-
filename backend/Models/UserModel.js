const mongoose=require("mongoose");
const userSchema= new mongoose.Schema({
    uuid:{
        type:String,

    },
    name:{
        type:String,
        
    },
    
    email:{
        type:String,
        
    },
    password:{
        type:String
    },
    phone:{
        type:Number,
        
    },
    address:{
        type:Number,
        
    }

})
const userModel=mongoose.model("user",userSchema);
module.exports=userModel;


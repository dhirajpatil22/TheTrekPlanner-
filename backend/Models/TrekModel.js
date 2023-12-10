const mongoose=require("mongoose")
const trekSchema=new mongoose.Schema({
    trekId: {
        type: String,
        required: true,
        trekId:true
      },
     name: {
        type: String,
        required: true,
        unique:true,
      
      },
      location: {
        type: String,
        required: true,
        trim: true,
      },
      difficulty: {
        type: String,
        enum: ['Easy', 'Moderate', 'Difficult'],
        required: true,
      },
      distance: {
        type: String,
        required: true,
      },
      duration: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      isDeleted:{
        type:Boolean,
        default:false
      },
      createdBy:{
        type:String
      },
      updatedBy:{
        type:String
      },
      updatedOn:{
        type: Date,
        
      },
      deletedBy:{
        type:String
      },
      deletedOn:{
        type: Date,
       
      },
},{timestamps:true})

const TrekModel=mongoose.model("trek",trekSchema);
module.exports=TrekModel;
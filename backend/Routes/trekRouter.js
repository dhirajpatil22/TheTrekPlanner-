const express = require("express");
const TrekModel = require("../Models/TrekModel");

const { v4: uuidv4 } = require('uuid');
const userModel = require("../Models/UserModel");
const trekRouter = express.Router();



trekRouter.post("/addTrek",async (req, res) => {

   console.log(req.body,"Bodyyy");
   const userId=req.userId;
   const uuid=uuidv4();
   let obj=req.body;
   obj["createdBy"]=userId;
   obj["trekId"]=uuid;
   
   try {
    const userDetails=await userModel.findOne({uuid:userId});
    const userRoles=userDetails.userRoles;
    if(userRoles.includes("admin")){
        const trekModel=new TrekModel(req.body);
    const response=await trekModel.save();
    console.log(response,"REP");
    res.status(201).send({status:201,data:response,message:"Trek created Successfully"});
    }else{
        res.status(404).send({status:404,data:userDetails,message:"You Have not Admin Permissions.."})
    }
    
    
   } catch (error) {
    console.log(error,"ERRR");
    res.status(500).send({status:500,error,message:"Server Error"});
    
   }
   

});

trekRouter.get("/getTreks", async(req, res) => {
 
   try {  
    const response=await TrekModel.find({isDeleted:false});
    res.status(201).send({status:201,data:response,message:"Treks fetched Successfully"});
    }

    catch (error) {
    console.log(error,"ERRR");
    res.status(500).send({status:500,error,message:"Server Error"});
    
   }
   
});

trekRouter.put("/updateTrek", async (req, res) => {
    console.log("Query Params:", req.query);
    console.log("Request Body:", req.body);
  
    const userId = req.userId;
    let obj = req.body;
    obj["updatedBy"] = userId;
    obj["updatedOn"]=new Date();
  
    try {
      const userDetails = await userModel.findOne({ uuid: userId });
      const userRoles = userDetails.userRoles;
  
      if (userRoles.includes("admin")) {
        
        const response = await TrekModel.findOneAndUpdate(
          { trekId: req.query.trekId }, 
          obj,
          { new: true, runValidators: true } 
        );
  
        if (response) {
          console.log("Updated Trek:", response);
          res.status(200).send({
            status: 200,
            data: response,
            message: "Trek Updated Successfully",
          });
        } else {
          res.status(404).send({
            status: 404,
            data: null,
            message: "Trek not found with the given trekId.",
          });
        }
      } else {
        res.status(403).send({
          status: 403,
          data: userDetails,
          message: "You do not have Admin Permissions.",
        });
      }
    } catch (error) {
      console.log(error, "ERRR");
      res.status(500).send({
        status: 500,
        error,
        message: "Server Error",
      });
    }
  });
  
  trekRouter.delete("/deleteTrek", async (req, res) => {
    let obj={};
    const trekId=req.query.trekId;
    const userId = req.userId;
    obj["isDeleted"]=true;
    obj["deletedOn"] = new Date();
    obj["deletedBy"]=userId;

  
    try {
      const userDetails = await userModel.findOne({ uuid: userId });
      const userRoles = userDetails.userRoles;
  
      if (userRoles.includes("admin")) {
        const response = await TrekModel.findOneAndUpdate({ trekId: req.query.trekId }, 
            obj,
            { new: true, runValidators: true } );
  
        if (response) {
          console.log("Deleted Trek:", response);
          res.status(200).send({
            status: 200,
            data: response,
            message: "Trek Deleted Successfully",
          });
        } else {
          res.status(404).send({
            status: 404,
            data: null,
            message: "Trek not found with the given trekId.",
          });
        }
      } else {
        res.status(403).send({
          status: 403,
          data: userDetails,
          message: "You do not have Admin Permissions.",
        });
      }
    } catch (error) {
      console.log(error, "ERRR");
      res.status(500).send({
        status: 500,
        error,
        message: "Server Error",
      });
    }
  });
  


module.exports = trekRouter;

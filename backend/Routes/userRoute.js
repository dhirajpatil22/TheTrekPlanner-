const express = require("express");
const userModel = require("../Models/UserModel");
const userRouter = express.Router();
const cryptoJs = require("crypto-js");
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');

userRouter.use(express.json());
userRouter.use(express.urlencoded({ extended: true }));

userRouter.post("/signin", (req, res) => {
    const { email, password } = req.body;
    const hashedPass = cryptoJs.SHA256(password).toString(cryptoJs.enc.Hex);

    console.log(email, typeof(hashedPass),hashedPass, "EEE");

    userModel.findOne({ email, password: hashedPass })
        .then((data) => {
            if (data) {
                console.log("")
                var token = jwt.sign({ id: data.uuid }, `${process.env.JWT_KEY}`);
                res.status(200).send({status:200,data,token});
            } else {
                res.status(404).send({ code: 404, message: "Not found" });
            }
        })
        .catch((err) => {
            console.log(err, "Error in findOne");
            res.status(500).send({ code: 500, message: "Internal Server Error" });
        });
});

userRouter.post("/signup", (req, res) => {
    let uuid = uuidv4();
    const { name, email, phone, address } = req.body;
   
    // Password hashing for data security
    const password = cryptoJs.SHA256(req.body.password).toString(cryptoJs.enc.Hex);

    userModel.findOne({ email })
        .then((data) => {
            console.log(data, "DATTA");
            if (data) {
                userModel.findOneAndUpdate({ email }, { $set: { password, email, name, address, uuid, phone } })
                res.status(200).send({ message: "User data update successfully.." });
            } else {
                const model = new userModel({ email, password, name, phone, address, uuid });
                model.save()
                    .then((data) => {
                        res.status(201).send({ message: "User created successfully..", id: data.uuid });
                    })
                    .catch((err) => {
                        console.log(err, "Error in save");
                        res.status(500).send({ code: 500, message: "Internal Server Error" });
                    });
            }
        })
        .catch((err) => {
            console.log(err, "Error in findOne");
            res.status(500).send({ code: 500, message: "Internal Server Error" });
        });
});

userRouter.post("/AdminSignup", (req, res) => {
    const uuid = uuidv4();
    
    const { name, email, phone, address } = req.body;
    // Password hashing for data security
    const password = cryptoJs.SHA256(req.body.password).toString(cryptoJs.enc.Hex);

    userModel.findOne({ email })
        .then(async(data) => {

            console.log(data, "DATTA");
            if (data) {
                
                const updatedData = await userModel.findOneAndUpdate(
                    { email },
                    { $push: { userRoles: "admin" } },
                    { new: true }
                );
                res.status(200).send({ message: "Added the Admin permission to user " + updatedData.name });
            } else {
                const model = new userModel({ email, password, name, phone, address, uuid });
                model.userRoles.addToSet("admin");
                model.save()
                    .then((data) => {
                        res.status(201).send({ message: "new Admin created successfully..", data});
                    })
                    .catch((err) => {
                        console.log(err, "Error in save");
                        res.status(500).send({ code: 500, message: "Internal Server Error" });
                    });
            }
        })
        .catch((err) => {
            console.log(err, "Error in findOne");
            res.status(500).send({ code: 500, message: "Internal Server Error" });
        });
});



module.exports = userRouter;

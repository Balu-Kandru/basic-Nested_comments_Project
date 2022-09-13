const express =require("express")
const contentModel=require("../model/contentmodel")
const signupModal=require("../model/usersignup")
const jwt = require("jsonwebtoken");

const contentpath=express.Router()

contentpath.post("/create",(req,res)=>{
    if(req.headers.authorization) {
        try {
            const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
            signupModal.find({username:user}).then((data)=>{
                contentModel.create({username:data[0].username,heading:req.body.heading,context:req.body.context})
                .then(()=>{
                    res.status(200).send("successfully created")
                }).catch((err)=>{
                    console.log(err)
                })
            })
        } catch(err) {
            res.status(403).send("User Not Authorized")
        }
    } else {
        res.status(400).send("Missing Authorization token")
    }
})

contentpath.get("/history",(req,res)=>{
    if(req.headers.authorization) {
        try {
            const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
            contentModel.find({username:user})
                .then((data)=>{
                    res.status(200).json(data)
                }).catch((err)=>{
                    console.log(err)
                })

        } catch(err) {
            res.status(403).send("User Not Authorized")
        }
    } else {
        res.status(400).send("Missing Authorization token")
    }
})

module.exports=contentpath
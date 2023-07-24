const express=require("express")
const cartRouter=express.Router()
const {auth}=require("../middleware/auth.middleware")
const {cartModel}=require("../Model/Cart.model")

cartRouter.post("/add",auth,async(req,res)=>{
try {
    // const {userId}=req.body
    const data=new cartModel({...req.body})
    await data.save()
    res.send("Data added")
} catch (error) {
    res.send(error)
}
})

cartRouter.get("/",auth,async(req,res)=>{
    try {
        const {userId}=req.body
        const data=await cartModel.find({userId})
        res.send(data)
    } catch (error) {
        res.send(error)
    }
    })
    





module.exports={cartRouter}
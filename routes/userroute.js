var express=require('express');
var router=express.Router();
var userModel=require('../model/user');
//Api for signup
router.post('/',(req,res)=>{
    try {
        userModel(req.body).save()
        res.status(200).send({message:"User added Successfully"})
    } catch (error) {
       res.status(500).send({message:"Something went Wrong"}) 
    }
})
//api for login
router.post('/login',async(req,res)=>{
try {
    const user=await userModel.findOne({Email:req.body.Email})
    if(!user){
        return res.send({message:"User not Found"})
    }
    if(user.Password === req.body.Password){
       return res.status(200).send({message:`welcome ${user.role}`,user})
    }
    return res.send({message:"Invalid password"})
} catch (error) {
    res.status(500).send({message:"Something went Wrong"})
    
}
})
module.exports=router;
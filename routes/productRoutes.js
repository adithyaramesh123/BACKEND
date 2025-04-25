var express=require('express');
var router=express.Router();
var productModel=require('../model/product');
const upload=require('../middleware/multerr');
//api to add product details
router.post('/',upload.array("images",5),async(req,res)=>{
    try {
        console.log(req.body)
        const imagePath=req.files.map(file=>file.filename)
        const{pName,price,stock,description}=req.body;
        const newProduct=new productModel({
            pName,
            price,
            stock,
            description,
            images:imagePath
        })
        await newProduct.save()
        res.status(200).send({message:'product added succesfully',product:newProduct})
    } catch (error) {
        res.status(500).send({message:error})
    }
})
//to get products
router .get('/',async(req,res)=>{
    try {
        var product=await productModel.find();
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
    }//TEST
})
module.exports=router;
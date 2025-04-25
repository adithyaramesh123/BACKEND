var mongoose=require('mongoose');


var productSchema=mongoose.Schema({
    pName:String,
    price:Number,
    stock:Number,
    description:String,
    images:[String]
    
})
var  productModel=mongoose.model("product",productSchema);
module.exports=productModel;


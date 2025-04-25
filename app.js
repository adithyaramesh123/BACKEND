var express =require('express');
var cors =require('cors');
var dotenv=require('dotenv');
dotenv.config();
var path=require('path')

const port =process.env.port
require('./connection');


const app=express();
app.use(express.json())
app.use(cors())

const userroute=require('./routes/userroute')
const productRoutes=require('./routes/productRoutes')

app.use('/api',userroute)
app.use('/p',productRoutes)
app.use('/uploads',express.static( path.join(__dirname,"uploads")))

app.listen(port,()=>{
    console.log(`server is up and running in ${port}`)
})


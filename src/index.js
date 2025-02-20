const express=require('express');
const {port}=require('./config/serverconfig.js')

const app=express();
app.listen(port,()=>{
    console.log(`server is started at ${port}`)
})
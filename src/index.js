const express=require('express');
const bodyParser=require('body-parser')
const {port}=require('./config/serverconfig.js')


const setupserver=async function(){
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


app.listen(port,()=>{
    console.log(`server is started at ${port}`);
});
}

setupserver();
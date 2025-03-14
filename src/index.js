const express=require('express');
const bodyParser=require('body-parser')
const {port}=require('./config/serverconfig.js')
const apiroutes=require('./routes/index.js')
const setupserver=async function(){
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


app.use('/api',apiroutes)

app.listen(port,()=>{
    console.log(`server is started at ${port}`);
});
}

setupserver();
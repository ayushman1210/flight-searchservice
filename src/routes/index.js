const express=require('express')
const router=express.Router();
const v1api=require('./v1');


router.use('/v1',v1api);

module.exports=router;
const express=require('express')
const citycontroller=require('../../controllers/city-controllers');

const router=express.Router();

router.post('/city',citycontroller.create);

module.exports=router;
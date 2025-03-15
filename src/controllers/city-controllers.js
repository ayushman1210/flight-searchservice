const { CityService}=require('../services/index')

const cityService= new CityService();


const create= async(req,res)=>{
try {
    const city=await cityService.createcity(req.body);
    return res.status(201).json({
        data:city,
        success:true,
        message:"succesful",
        err:{}
    })
} catch (error) {
    console.log(error)
    return res.status(500).json({
        success:false,
        data:{},
        message:'not able to create a city',
        err:{error},
        data:(req.body)
    })
}
}

const destroy= async (req,res)=>{
    try {
        const response=await cityService.deletecity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"succesful delete city",
            err:{}
        }
    )
    
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            data:{},
            message:'not able to delete a city',
            err:{error}
        })
    }
}

const update= async(req,res)=>{
    try {
    const city=await cityService.updatecity(req.params.id,req.body);
    return res.status(200).json({
        data:city,
        success:true,
        message:"successfully updated",
    })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            data:{},
            message:'not able to update a city',
            err:{error}
        })
    }
}

const get= async(req,res)=>{
    try {
        const response=await cityService.getcity(req.params.id);
    return res.status(200).json({
        data:response,
        success:true,
        message:"successful",
    })
    
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            data:{},
            message:'not able to get a city',
            err:{error}
        })
    }
}

module.exports={
    create, destroy, update, get
}
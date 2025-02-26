const { City }=require('../models/index.js');

class CityRepository{
    async createcity({name}){
        try{
            const city=await City.create({name});
            return city;
        }
        catch(error){
            console.log("something wrong in the repository layer")
        throw{error};
        }
    }

    async deletecity(cityid){
        try{
            await City.destroy({
                where:{
                    id:cityid
                }
            });
        }
        catch(error){
            console.log("something wrong in the repository layer")
            throw{error};
        }
    }
    async updatecity(cityid,data){
        try {
            const updatedcity=await City.update(data,{
                where:{
                    id:cityid
                }
            });
            return updatedcity;

        } catch (error) {
            console.log("something wrong in the repository layer")
            throw(error)
        }
    }
    async getcity({cityid}){
        try {
            const city=await City.findByPk(cityid);
            return city;
        } catch (error) {
            console.log("something wrong in the repository layer")
            throw(error)
        }
    }
}

module.exports=CityRepository;
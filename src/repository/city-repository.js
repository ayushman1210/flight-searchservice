const { city } = require('../models');

class CityRepository {
    async createCity({ name }){
        try{
            const newCity=await city.create({ name })
            return newCity;
        }
        catch(error){
            console.log("something wrong in the repository layer")
        throw{error};
        }
    }

    async deleteCity(cityid){
        try{
            await city.destroy({
                where:{
                    id:cityid
                }
            });
            return true;
        }
        catch(error){
            console.log("something wrong in the repository layer")
            throw{error};
        }
    }
    async updateCity(cityid,data){
        try {
            const updatedcity=await city.update(data,{
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
    async getCity({cityid}){
        try {
            const gotCity=await city.findByPk(cityid);
            return gotCity;
        } catch (error) {
            console.log("something wrong in the repository layer")
            throw(error)
        }
    }
}

module.exports=CityRepository;
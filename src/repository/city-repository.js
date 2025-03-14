const {city} = require('../models/city.js');
// const { City }=require('../models/index.js');

class CityRepository {
    async createCity({name}){
        try{
            const City=await city.create({name})
            return City;
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
            const city=await city.findByPk(cityid);
            return city;
        } catch (error) {
            console.log("something wrong in the repository layer")
            throw(error)
        }
    }
}

module.exports=CityRepository;
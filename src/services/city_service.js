const {CityRepository}=require('../repository/index')

class CityService {
    constructor(){
        this.CityRepository=new CityRepository();
    }

    async createcity(data){
        try {
            const city= await this.CityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("something error in service layer");
            throw(error)
        }
    }

    async deletecity(cityid){
        try{
            const response= await this.CityRepository.deleteCity(cityid);
            return response;
        }
        catch(error){
            console.log("something error in service layer")
            throw {error};
        }
    }
    async updatecity(cityid,data){
        try {
            const updatedcity= await this.CityRepository.updateCity(cityid,data);
            return updatedcity;
        } catch (error) {
            console.log("something error in service layer")
            throw {error};
        }
    }
    async getcity(cityid){
        try {
            const city=await this.CityRepository.getCity(cityid)
            return city;
        } catch (error) {
            console.log("sommething error in service layer")
            throw {error};
        }
    }
}

module.exports=CityService;
const {CityRepository}=require('../repository/index')

class CityService{
    constructor(){
        this.CityRepository=new CityRepository();
    }

    async createcity(data){
        try {
            const city= await this.CityRepository.createcity(data);
            return city;
        } catch (error) {
            console.log("something error in service layer");
            throw(error)
        }
    }

    async deletecity(cityid){
        try{
            const response= await this.CityRepository.deletecity(cityid);
            return response;
        }
        catch(error){
            console.log("something error in service layer")
            throw {error};
        }
    }
    async updatecity(cityid,data){
        try {
            const updatedcity= await this.CityRepository.updatecity(cityid,data);
            return updatedcity;
        } catch (error) {
            console.log("something error in service layer")
            throw {error};
        }
    }
    async getcity(cityid){
        try {
            const city=await this.CityRepository.getcity(cityid)
            return city;
        } catch (error) {
            console.log("sommething error in service layer")
            throw {error};
        }
    }
}
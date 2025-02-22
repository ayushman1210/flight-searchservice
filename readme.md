# welcome to flight services 

# project setup
-clone it on your local 
-execute `npm install` on the same path as of your root directory of the downloaded project
-create a `.env` file in the root directory and add the following environment variable 
-`port=3000`
inside the `src/config` folder create newfile `config.json` and then add the following piece of json 


```
{
  "development": {
    "username": <your_db_name>
    "password": <your_password>,
    "database": "flights_search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}
```
once you added your db config as listed above go to the src folder from your terminal 
and execute `npx sequelize db:create`


## DB design 
-Airplane table( id,model_number, capacity,created_at,updated_at)
-flight(unique_id,source airport,dest_apirport, departure date &time,arrival_time & date,flight_number,airplane_id)
-city(_id,name)
-Airport(id, name,city_id,address)

- A flight belongs to an airplane but one aeroplane can be used in multipe flights
-A city has many airports but one airport belong to a city 
-one airport can have many flights but a flight belong to one airport 
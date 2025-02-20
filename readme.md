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
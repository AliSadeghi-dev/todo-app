const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("todo_db","root","ali13770723",{
    dialect:"mysql",
    host:"localhost"
});

module.exports=sequelize; 

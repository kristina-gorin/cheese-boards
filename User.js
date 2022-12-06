const {Sequelize, sequelize} = require('./db');

// define the user model
let User = sequelize.define('user',{
    name: Sequelize.STRING, 
    email: Sequelize.STRING,
    
});

module.exports = {
    User
};

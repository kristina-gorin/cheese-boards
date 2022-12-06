const {Sequelize, sequelize} = require('./db');

// cheese model
let Cheese = sequelize.define('cheese',{
    title: Sequelize.STRING, 
    description: Sequelize.STRING,
    
});

module.exports = {
    Cheese
};

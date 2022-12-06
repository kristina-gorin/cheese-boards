const {Sequelize, sequelize} = require('./db');

//Board model
let Board = sequelize.define('board',{
    type: Sequelize.STRING, 
    description: Sequelize.STRING,
    rating: Sequelize.NUMBER
});

module.exports = {
    Board
};

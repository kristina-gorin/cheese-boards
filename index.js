const {User} = require('./User')
const {Board} = require('./Board')
const {Cheese} = require('./Cheese')

// Musician.belongsTo(Band);
// Band.hasMany(Musician);

// Song.belongsToMany(Band,{through:"song_band"});
// Band.belongsToMany(Song,{through:"song_band"});

module.exports = {
    User,
    Cheese,
    Board
};
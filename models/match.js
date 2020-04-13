const mongoose = require('mongoose');

let matchSchema = new mongoose.Schema({
    //the user should obviously be linked to their riot account, how do?
    matchID: {
        type: String,
        required: true
    },
    players: {              //How exactly will this reference a player? ObjectID? riot name?
        type: [String],
        required: true
    },
    matchStats: {           //An assortment of match stats given by riot API
        ctScore: Number,
        tScore: Number,
        chickensKilled: Number
    }
});

const match = mongoose.model("match", matchSchema);
module.exports = match;
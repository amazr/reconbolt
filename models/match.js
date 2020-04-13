const mongoose = require('mongoose');

let matchSchema = new mongoose.Schema({
    matchID: //the user should obviously be linked to their riot account, how do?
    {
        type: String,
        required: true
    },
    players: //How exactly will this reference a player? ObjectID? riot name?
    {              
        type: [String],
        required: true
    },
    matchStats: //An assortment of match stats given by the riot api
    {          
        rounds : //An array for stats based off each round
        [
            {

            }
        ],
        otherData: String,
        otherDataTwo: Number
    }
});

const match = mongoose.model("match", matchSchema);
module.exports = match;
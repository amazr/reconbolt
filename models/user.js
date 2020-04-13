const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username:   //the user should obviously be linked to their riot account, how do?
    {
        type: String,
        required: true
    },
    password: 
    {
        type: String,
        required: true
    },
    userstats:  //This section will be expanded to fit riots API specifically
    {                
        kda: Number,
        hoursPlayed: Number
    },
    matches: [String]   //Each match has a unique id given from riot
});

const user = mongoose.model("user", userSchema);
module.exports = user;
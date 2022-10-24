const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: [true, 'Name is required'],
        minLength: [2, 'Name must be at least 2 characters']
    },
    preferredPosition: {type: String},
    GameOneStatus: {type: String},
    GameTwoStatus: {type: String},
    GameThreeStatus: {type: String}
})

const Player = mongoose.model("Player", PlayerSchema)

module.exports=Player
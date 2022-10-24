const Player = require('../models/player.model')

module.exports = {
    createPlayer: (req, res) =>{
        const {name} = req.body
        const {preferredPosition} = req.body
        Player.create({name: name, preferredPosition: preferredPosition, GameOneStatus: 'Undecided', GameTwoStatus: 'Undecided', GameThreeStatus: 'Undecided'})
        .then(newPlayer=>res.json(newPlayer))
        .catch(err=>res.status(400).json(err))
    },
    getPlayers: (req, res) =>{
        Player.find({})
        .then(players=> res.json(players))
        .catch(err=>console.log(err))
    },
    deletePlayer: (req, res) =>{
        Player.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err=> console.log(err))
    },
    updateOne: (req, res) =>{ 
        console.log(req.body)
        Player.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(player=>res.json(player))
        .catch(err=>res.status(400).json(err))
    }

}
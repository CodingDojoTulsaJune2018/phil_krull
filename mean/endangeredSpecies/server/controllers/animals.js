const mongoose = require("mongoose");
const Animal = mongoose.model("Animal");

module.exports = {
    index: (req, res)=>{
        Animal.find({})
        .then(animals => res.json(animals))
        .catch(err => res.send(err))
    },
    create: (req, res)=>{
        Animal.create(req.body)
        .then(animal => res.json(animal))
        .catch(err => res.send(err))
    },
    show: (req, res)=>{
        Animal.findById(req.params.id)
        .then(animal => res.json(animal))
        .catch(err => res.send(err))
    },
    delete: (req, res) => {
        Animal.findByIdAndRemove(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.send(err))
    }
}
const mongoose = require('mongoose');
const Turkey = mongoose.model('Turkey');

module.exports = {
    index: (req, res)=>{
        console.log('in index');
        Turkey.find({}, (err, turkeys)=>{
            if(err){
                res.send(err);
            } else {
                res.json(turkeys);
            }
        })
    },
    show: (req, res)=>{
        console.log(req.params.id);
        Turkey.findOne({_id: req.params.id}, (err, turkey)=>{
            if(err){
                res.send(err);
            } else {
                res.json(turkey);
            }
        })
    },
    create: (req, res)=>{
        let new_turkey = new Turkey(req.body);
        new_turkey.save()
        .then(()=> res.json(new_turkey))
        .catch(err => res.send(err))
    },
    update: (req, res)=>{
        Turkey.findOneAndUpdate({_id: req.params.id}, {$set:{name: req.body.name}}, (err)=>{
            if(err){
                res.send(err);
            } else {
                res.send(true);
            }
        });
    },
    delete: (req, res)=>{
        Turkey.remove({_id: req.params.id}, (err, result)=>{
            if(err){
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
}
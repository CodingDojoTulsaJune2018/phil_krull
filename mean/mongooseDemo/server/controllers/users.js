const mongoose = require("mongoose");
// getter
const User = mongoose.model("User");

const Product = mongoose.model("Product");

module.exports = {
    index: (req, res) => {
        User.find({}, (err, usersFromDB)=>{
            if(err) {
                console.log(err);
                console.log("2");
            } else {
                console.log(usersFromDB);
                console.log("2");
                res.render("index", {users: usersFromDB});
            }
        })
        console.log("1");
    }, 
    create: (req, res) => {
        const user = new User(req.body);
        user.save((err)=>{
            if(err){
                console.log(err);
            }
            res.redirect("/");
        });
    }
}
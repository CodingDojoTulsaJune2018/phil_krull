const mongoose = require("mongoose");
const Product = mongoose.model("Product");
const User = mongoose.model("User");

module.exports = {
    create: (req, res)=>{
        User.findOne({_id: req.params.user_id})
        .then(user=>{
            // create the product
            const product = new Product(req.body);
            product.save();
            user.products.push(product);
            user.save();
            console.log("Product created");
            res.redirect("/");
        })
        .catch(err=>{
            console.log("errors", err);
            res.redirect("/");
        })

    }
}
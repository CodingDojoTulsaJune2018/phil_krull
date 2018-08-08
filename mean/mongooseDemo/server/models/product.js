const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name field is required"]},
    price: {type: Number, required: [true, "Give me a price Yo!"]}
   }, {timestamps: true})
   
// setter
mongoose.model('Product', ProductSchema);

module.exports = ProductSchema;
const mongoose = require("mongoose");
const ProductSchema = require("./product");

const UserSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name field is required"]},
    products: [ProductSchema]
   }, {timestamps: true})

mongoose.model('User', UserSchema);
const mongoose = require('mongoose');

const TurkeySchema = new mongoose.Schema({
    name:{
      type: String,
      required: true
    }
  }, {timestamps: true});
  
  mongoose.model('Turkey', TurkeySchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Model = new Schema({
    name:String,
    description:String
});

module.exports = mongoose.model('Model',Model);
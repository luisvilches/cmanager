const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Categories = new Schema({
    name:String,
    description:String
});

module.exports = mongoose.model('Categories',Categories);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TypeProyecto = new Schema({
    name:String,
    description:String
});

module.exports = mongoose.model('TypeProyecto',TypeProyecto);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Model = new Schema({
    name:String,
    team:{
        id:String,
        name:String
    },
    mail:String,
    avatar:String,
    password:String,
    role:String
});

module.exports = mongoose.model('Model',Model);
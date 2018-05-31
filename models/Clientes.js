const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Model = new Schema({
    name:String,
    contacts:[
        {
            name:String,
            mail:String,
            phone:String,
            mobile:String,
            position:String
        }
    ],
    address:String,
    website:String,
    phone:String
});

module.exports = mongoose.model('Model',Model);
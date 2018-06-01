const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Usuario = new Schema({
    name:String,
    lastName:String,
    team:[
        {
            id:String,
            name:String
        }
    ],
    mail:String,
    avatar:String,
    password:String,
    role:String
});

module.exports = mongoose.model('Usuario',Usuario);
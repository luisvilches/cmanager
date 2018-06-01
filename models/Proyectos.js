const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Proyecto = new Schema({
    name:String,
    slug:String,
    client:{
        id:String,
        name:String,
    },
    type:String,
    date_init:Date,
    date_ent:Date,
    team:{
        id:String,
        name:String
    },
    credentials:[
        {
            title:String,
            description:String,
            keys:[
                {
                    name:String,
                    description:String,
                    user:String,
                    password:String,
                    other:String
                }
            ]
        }
    ],
    documentation:[
        {
            title:String,
            Description:String,
            doc:String,
            idUser:String
        }
    ],
    fileRepository:[
        {
            name:String,
            description:String,
            file:String
        }
    ],
    userCreate:{
        id:String,
        name:String
    }

});

module.exports = mongoose.model('Proyecto',Proyecto);
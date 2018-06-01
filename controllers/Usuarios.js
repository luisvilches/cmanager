const Model = require("../models");
const randomColor = require('../utils/randomColor');
const uploadfile = require('../utils/fileupload');
require("../utils/prototypes");

exports.create = (req,res) => {

    let User = new Model.Usuarios({
        name:req.body.name,
        lastName: req.body.lastName,
        team:[],
        mail:req.body.mail,
        avatar:'https://ui-avatars.com/api/?size=1024&background='+randomColor()+'&color=fff&name='+req.body.name.charAt(0)+'+'+req.body.lastName.charAt(0),
        password:req.body.password,
        role:req.body.role.toLowerCase()
    });

    User.save((err,response) =>{
        if(err){
            res.status(500).json({
                status:false,
                message: err
            })
        } else {
            res.status(200).json({
                status:true,
                message: 'success'
            })
        }
    });

}


exports.verifyLogin = (req,res) => {
    console.log('=>',req.params.id)
    Model.Usuarios.findById({_id:req.params.id},(err,response) => {
        if(err){
            console.log("error =>",err);
            res.status(500).json({
                status:false,
                message: err
            })
        } else {
            res.status(200).json({
                status:true,
                message: 'success',
                data:response
            })
        }
    })
}


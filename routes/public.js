const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const ctrl = require("../controllers");


router.get("/", function(req,res){res.json({message:"Hola mundo Cardumen!!"})});
router.post('/login', ctrl.auth.auth);
router.post('/register', ctrl.Usuarios.create);

module.exports = router;
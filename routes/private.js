const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const ctrl = require("../controllers");

router.get("/user/:id",ctrl.Usuarios.verifyLogin);

module.exports = router;
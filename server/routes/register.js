var express = require('express');
var router = express.Router();


//modules
var checkLogin = require('../modules/checkLogin.js');
var user = checkLogin.userLogin


router.post('/', function(req, res) {
    var userInfo = req.body;
    user.register(userInfo.email,userInfo.password);





});

module.exports = router;

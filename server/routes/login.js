var express = require('express');
var router = express.Router();


//modules

var checkLogin = require('../modules/checkLogin.js');
var user = checkLogin.userLogin


router.post('/', function(req, res) {
    var userInfo = req.body;
    console.log(userInfo);
    user.login(userInfo.email,userInfo.password);
});



module.exports = router;

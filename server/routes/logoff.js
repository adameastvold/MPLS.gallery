var express = require('express');
var router = express.Router();


//modules

// var checkLogin = require('../modules/checkLogin.js');
// var user = checkLogin.userLogin;


// var status = checkLogin.logStatus();

// router.get('/', function(req, res){
//   console.log(status);
//   res.send(status);
// });



var checkLogin = require('../modules/checkLogin.js');
var user = checkLogin.userLogin;


router.post('/', function(req, res) {
    var userInfo = req.body;
    console.log(userInfo);
    user.signOut();
    res.send('anything');
});






// router.post('/', function(req, res) {
//
//   console.log('here it is', req.body);
// });



// router.post('/', function(req, res) {
//     var userInfo = req.body;
//     console.log(userInfo);
//     user.login(userInfo.email,userInfo.password);
// });

module.exports = router;

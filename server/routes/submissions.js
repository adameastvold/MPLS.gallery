var express = require('express');
var router = express.Router();
var pg = require('pg');
var connect = require('../modules/connection');
var fs = require('fs');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});


// router.get('/', function(req, res) {
//   var results = [];
//
//   pg.connect(connect, function(err, client, done) {
//     client.query('SELECT * FROM people',
//     function(err, result) {
//       done();
//       if(err) {
//         console.log(err);
//         res.sendStatus(500);
//       } else {
//         res.send(result.rows);
//       }
//     });
//   });
// });
router.post('/', function(req, res) {
  console.log('working!')
  var artist = req.body;
  // var image = req.file;

// console.log('this is your artist photo:', image);
  console.log('this is your artist info:', artist);
  res.sendStatus(200);
  // console.log('this is your aboutIMG file:', aboutImg);
  // pg.connect(connect, function(err, client, done) {
  //   client.query('INSERT INTO people (name) ' +
  //   'VALUES ($1)',
  //   [person],
  //   function(err, result) {
  //     done();
  //     if(err) {
  //       console.log(err);
  //       res.sendStatus(500);
  //     } else {
  //       res.sendStatus(201);
  //     }
    // });
  // })
});


module.exports = router;

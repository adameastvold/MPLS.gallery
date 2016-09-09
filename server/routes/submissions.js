var express = require('express');
var router = express.Router();
var pg = require('pg');
var connect = require('../modules/connection');



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
  console.log('working!')
router.post('/', function(req, res) {
  console.log('working!')
  var artist = req.body;
  var aboutImg = req.files;

  console.log('this is your artist info:', artist);
  console.log('this is your aboutIMG file:', aboutImg);
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


  console.log('working!')
module.exports = router;

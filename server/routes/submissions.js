var express = require('express');
var router = express.Router();
var fs = require('fs');
// var Artist = require('../models/artistModel');
var multer = require('multer');
var upload = multer({dest: 'server/public/uploads/'});
var cloudinary = require('cloudinary');

//========GETS LIST OF ALL INFO IN DATABASE===========
// router.get('/', function (req, res, next) {
//   Artist.find({},  function (err, artists) {
//     if (err) next(err);
//     else {
//       res.send(artists);
//     }
//   });
// });



//========CLOUDINARY POST=========
router.post('/', upload.single('file'), function(req, res) {
  cloudinary.uploader.upload(req.file.path, function(result) {
    console.log('this is the routes result:', result);
    res.send(result);
  });
});


//==========MONGO POST========
// router.post('/', upload.single('file'), function (req, res) {
//         console.log('this is req:', req);
//
//
//   var newArtist = {
//     name: req.body.name,
//     description: req.body.description,
//     email: req.body.email,
//     created: Date.now(),
//     file: req.file
//   };
//   console.log('This is the info before the file sent to db:', req.body);
//   console.log('This is the file being sent to the db:', req.file);
//   Artist.create(newArtist, function (err, next) {
//     if (err) {
//       next(err);
//     } else {
//       res.send(newArtist);
//     }
//   });
// });





module.exports = router;

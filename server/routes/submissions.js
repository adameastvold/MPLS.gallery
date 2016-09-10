var express = require('express');
var router = express.Router();
var fs = require('fs');
var Artist = require('../models/artistModel');
var multer = require('multer');
var upload = multer({dest: 'public/uploads/'});

//========GETS LIST OF ALL INFO IN DATABASE===========
router.get('/', function (req, res, next) {
  Artist.find({},  function (err, artists) {
    if (err) next(err);
    else {
      res.send(artists);
    }
  });
});

/**
 * Gets a file from the hard drive based on the unique ID and the filename
 */
router.get('/:uuid/:filename', function (req, res, next) {
  console.log('this is that random log:', req.params);
  Artist.findOne({
    'file.filename': req.params.uuid,
    'file.originalname': req.params.filename
  }, function (err, artist) {

    if (err) next(err);
    else {
      res.set({
        "Content-Disposition": 'attachment; filename="' + upload.file.originalname + '"',
        "Content-Type": upload.file.mimetype
      });
      fs.createReadStream(upload.file.path).pipe(res);
    }
  });
});

/**
 * Create's the file in the database
 */
router.post('/', upload.single('file'), function (req, res, next) {
  console.log('This is the info before the file sent to db:', req.body);
  console.log('This is the file being sent to the db:', req.file);
  var newArtist = {
    name: req.body.name,
    description: req.body.description,
    email: req.body.email,
    created: Date.now(),
    file: req.file
  };
  Artist.create(newArtist, function (err, next) {
    if (err) {
      next(err);
    } else {
      res.send(newArtist);
    }
  });
});

module.exports = router;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');



// MODULES & ROUTES
var submitRoute = require('./routes/submissions');
var index = require('./routes/index');

//ENV FILE:
require('dotenv').config();


// MONGO HOOK UP
var mongoURI = "mongodb://localhost:27017/mplsGallery";

var MongoDB = mongoose.connect(mongoURI).connection;
MongoDB.on('error', function (err) {
  if (err) {
    console.log('mongodb connection error', err);
  } else {
    console.log('mongodb connection successful');
  }
});

MongoDB.once('open', function () {
  console.log('mongodb connection open');
});

// Serve back static files

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));   //note that this is false within the mongo-files branch
app.use(express.static(path.join(__dirname, './public')));

// Routes

app.use('/submissions', submitRoute);
app.use('/', index);
// app.use('/uploads', uploads);



app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});

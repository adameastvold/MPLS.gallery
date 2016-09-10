var mongoose = require('mongoose');

var ArtistSchema = mongoose.Schema({
  name: String,
  description: String,
  email: String,
  created: Date,
  file: Object
});

module.exports = mongoose.model('Artist', ArtistSchema);

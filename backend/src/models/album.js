var mongoose = require('mongoose');

var AlbumSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  publishing_date: {
    type: Date,
    default: Date.now
  },
  cover_b64: {
    type: String,
    required: true
  }
});

var Album = mongoose.model('Album', AlbumSchema);

export default Album;
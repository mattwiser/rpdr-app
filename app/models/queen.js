// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var QueenSchema = new Schema({
  name: String,
  age: Number,
  location: String,
  season: Number
});

QueenSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Queen', QueenSchema);


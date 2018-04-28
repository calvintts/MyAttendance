var mongoose = require('mongoose');

var classSchema = new mongoose.Schema({
  className : String,
  classNumber : Number,
  classDay: Date,
  location:
  {
    longitude: Number,latitude: Number
  },
  attendance: [{
    student_id:Number,
  }]
});

var Class = mongoose.model ('class',classSchema);
module.exports = Class;

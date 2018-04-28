var mongoose = require('mongoose');

var classSchema = new mongoose.Schema({
  className : String,
  classNumber : Number,
  classDay: Date,
  classID: Number,
  x_coordinate: Number,
  y_coordinate: Number,
  attendance: [{
    student_id:Number,
  }]
});

var Class = mongoose.model ('class',classSchema);
module.exports = Class;

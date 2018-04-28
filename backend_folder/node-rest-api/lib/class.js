var mongoose = require('mongoose');

var classSchema = new mongoose.Schema({
  className : String,
  classNumber : Number,
  classDay: Date,
  location:
  {
    type: {String, default: 'Point'},
    coordinates: {type: [Number], default: [0, 0]}
  },
  attendance: [{
    student_id:Number,
  }]
});

var Class = mongoose.model ('class',classSchema);
module.exports = Class;

/*
geojson format
location: {
       // It's important to define type within type field, because
       // mongoose use "type" to identify field's object type.
       type: {type: String, default: 'Point'},
       // Default value is needed. Mongoose pass an empty array to
       // array type by default, but it will fail MongoDB's pre-save
       // validation.
       coordinates: {type: [Number], default: [0, 0]}
   }
*/

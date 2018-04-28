var express = require('express');
var router = express.Router();
var Class = require('../lib/class');
var mongoose = require('mongoose');
var moment = require('moment');
var db_url="mongodb://heroku_sp406f4tt:hackFresno2018@ds135252.mlab.com:35252/heroku_sp406f4t";



//start the db for attendance
router.post('/start',function(req,res)
{
  mongoose.connect(db_url);
  var db = mongoose.connection;
  db.once("open",function() {
  	console.log("DB connected!");
  });
  var x_coordinate = req.body.x_coordinate;
  var y_coordinate = req.body.y_coordinate;
  var classDay = moment().month()+1 + '/' + moment().date() + '/' + moment().year();
  console.log(classDay);
  var classID = req.body.classID;
  var newClass = new Class();
  newClass.classNumber = req.body.classNumber;
  newClass.classDay = classDay;
  newClass.y_coordinate = y_coordinate;
  newClass.x_coordinate = x_coordinate;
  newClass.save(function(err,savedUser){
      if(err){
          console.log(err);
          return res.json({"result":false, "message":"Failed creating attendance sheet"});
      }
      return res.json({"result":true, "message":"Attendance Started!"});
  });
});


router.get('/end',function(req,res){
  mongoose.disconnect();
  return res.json({"message":"Attendance stopped!"});
});



module.exports = router;

var express = require('express');
var router = express.Router();
var Class = require('../lib/class');
var mongoose = require('mongoose');
var moment = require('moment');
var db_url = "mongodb://heroku_sp406f4tt:hackFresno2018@ds135252.mlab.com:35252/heroku_sp406f4t";

//start the db for attendance
router.get('/:location/:classNumber',function(req,res)
{
  //CONNECT TO DATABASE
  mongoose.connect(db_url);
  var db = mongoose.connection;
  db.once("open",function() {
  	console.log("DB connected!");
  });
  var cords = req.params.location.coordinates;
  var tempClass=new Class();
  var classDay = moment().month()+1 + '/' + moment().date() + '/' + moment().year();
  tempClass.classNumber = req.params.classNumber;
  tempClass.classDay = classDay;
  Class.findOne({classNumber:classNumber,classDay:classDay},function(err,returnedClass){
    if(err){
      next(err);
    }else{
      console.log(returnedClass);
      if(geolib.getDistance(returnedClass.location.coordinates,
      cords)<300){
          returnedClass.attendance.push({student_id: req.session.user['id_number']});
          res.json({"result":true,
                    "message":"Attendaance Marked"});
      }
    }
  })
});





module.exports = router;

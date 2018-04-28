var express = require('express');
var router = express.Router();
var Class = require('../lib/class');
var mongoose = require('mongoose');
var moment = require('moment');
var db_url = "mongodb://heroku_sp406f4tt:hackFresno2018@ds135252.mlab.com:35252/heroku_sp406f4t";

//start the db for attendance
router.get('/',function(req,res)
{
  //CONNECT TO DATABASE
  mongoose.connect(db_url);
  var db = mongoose.connection;
  db.once("open",function() {
  	console.log("DB connected!");
  });
});





module.exports = router;

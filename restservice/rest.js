var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();

var url = 'mongodb://localhost:27017/vkdb';
var MongoClient = mongodb.MongoClient;

var insertval = require("./restmodule/insertval.js");

router.post('/', function (req, res) {
	var registerdata = req.body;
	console.log("req.body: " + req.body);
	
	insertval.insertservice(registerdata);
	res.json({success:true});
});

module.exports = router;
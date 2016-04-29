var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();

var url = 'mongodb://localhost:27017/vkdb';
var MongoClient = mongodb.MongoClient;

var insertval = require("./restmodule/insertval.js");
var getvalue = require("./restmodule/getvalue.js");

router.post('/', function (req, res) {
	var registerdata = req.body;
	insertval.insertservice(registerdata);
	res.json({success:true});
});

router.get('/', function (req, res) {

    getvalue.insertservice(res);

});

module.exports = router;
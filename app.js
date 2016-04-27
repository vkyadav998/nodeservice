var express = require('express');
var router = express.Router();
var app = express();

var bodyParser = require('body-parser');
var rest = require("./restservice/rest");


app.use("/register", rest);


app.use(bodyParser.json({limit: '10mb'})); 
app.use(bodyParser.urlencoded({limit: '10mb', extended: true })); 

//For static pages only
app.use(express.static('public'));



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
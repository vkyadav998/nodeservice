/**
 * Created by pc on 29-04-2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kittySchema = new Schema({
    name: String,
    mobile:Number,
    email:String,
    subject:String,
    type:String,
    password:String,
    date:String
}, {collection:'user'});

mongoose.model('Kitten', kittySchema);

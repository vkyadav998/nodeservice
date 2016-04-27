var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/vkdb';

var firstrestvar = {
	insertservice : function(registerdata) {

		// Use connect method to connect to the Server
		MongoClient.connect(url, function (err, db) {
		  if (err) {
		    console.log('Unable to connect to the mongoDB server. Error:', err);
		  } else {
		    //HURRAY!! We are connected. :)
		    console.log('Connection established to', url);

		    // Get the documents collection
		    var collection = db.collection('users');
		   
		    collection.insert(registerdata, function (err, result) {
		      if (err) {
		        console.log(err);
		        console.log("its error try again");
		      } else {
		        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
		      }
		    });
		   
		  }
		});
	},	
	
};

module.exports = firstrestvar;






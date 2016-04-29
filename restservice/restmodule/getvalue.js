
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/vkdb';

var firstrestvar = {
    insertservice : function(res) {

        MongoClient.connect(url, function (err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
            } else {

                console.log('Connection established to', url);

                // Get the documents collection
                var collection = db.collection('users');

                collection.find({}).toArray(function (err, result) {
                    if (err) {
                        console.log(err);
                    } else if (result.length) {
                        console.log('Data comes from the Database:', result);

                    } else {
                        console.log('No document(s) found with defined "find" criteria!');
                    }
                    //Close connection
                    db.close();

                    res.json({"data":result,"success":true});;
                });

            }
        });
    }

};

module.exports = firstrestvar;






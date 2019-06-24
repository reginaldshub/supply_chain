const fs = require('fs');
const KeyManager = require("./routes/keymanager");
var User = require("./models/user");
let rawdata = fs.readFileSync('data.json');
let student = JSON.parse(rawdata);
// console.log(student.Farmer);
var keyManager = new KeyManager();

student.Farmer.forEach((farmer) => {
    var output = keyManager.createkeys(farmer.email);
    keyManager.savekeys(farmer.email, output);

})

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("supplyChain");
    dbo.collection("users").insertMany(student.Farmer, { useNewUrlParser: true }, function(err, res) {
        if (err) throw err;
        dbo.collection("users").insertMany(student.Inspector, { useNewUrlParser: true }, function(err, res) {
            if (err) throw err;
            dbo.collection("users").insertMany(student.ProcessAgent, { useNewUrlParser: true }, function(err, res) {
                if (err) throw err;
                dbo.collection("users").insertMany(student.RetailAgent, { useNewUrlParser: true }, function(err, res) {
                    if (err) throw err;
                    db.close();
                });
            });
        });


    });
});
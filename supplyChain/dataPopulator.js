const fs = require('fs');
const KeyManager = require("./routes/keymanager");
var User = require("./models/user");
let rawdata = fs.readFileSync('data.json');
let JsonData = JSON.parse(rawdata);
// console.log(JsonData.Farmer);
var keyManager = new KeyManager();

JsonData.Farmer.forEach((farmer) => {
    var output = keyManager.createkeys(farmer.email);
    keyManager.savekeys(farmer.email, output);

})

JsonData.Inspector.forEach((inspector) => {
    var output = keyManager.createkeys(inspector.email);
    keyManager.savekeys(inspector.email, output);

})

JsonData.ProcessAgent.forEach((processAgent) => {
    var output = keyManager.createkeys(processAgent.email);
    keyManager.savekeys(processAgent.email, output);

})

JsonData.RetailAgent.forEach((retailAgent) => {
    var output = keyManager.createkeys(retailAgent.email);
    keyManager.savekeys(retailAgent.email, output);

})

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("supplyChain");
    dbo.collection("users").insertMany(JsonData.Farmer, { useNewUrlParser: true }, function(err, res) {
        if (err) throw err;
        dbo.collection("users").insertMany(JsonData.Inspector, { useNewUrlParser: true }, function(err, res) {
            if (err) throw err;
            dbo.collection("users").insertMany(JsonData.ProcessAgent, { useNewUrlParser: true }, function(err, res) {
                if (err) throw err;
                dbo.collection("users").insertMany(JsonData.RetailAgent, { useNewUrlParser: true }, function(err, res) {
                    if (err) throw err;
                    db.close();
                });
            });
        });


    });
});
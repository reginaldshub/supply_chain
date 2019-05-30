var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var User = require("../models/user");
const { prepareTransactions } = require("./prepareTransaction");
const { SubmitToServer } = require("./sumitToServer.js");
const KeyManager = require("./keymanager");

var batchlistBytes = null;
var keyManager = new KeyManager();

router.post("/registration", function(req, res, next) {
    User.findOne({ name: req.body.name }, (err, userExists) => {
        if (userExists)
            return res.status(409).json({ message: "User Already Registered." });
        else if (err) throw err;
        else {
            var user = new User({
                name: req.body.email,
                id: req.body.username,
                role: req.body.role,
                password: User.hashPassword(req.body.password)
            });

            user.save().then(function(doc) {
                return res.status(201).json({ message: "registered sucessfully" });
            }).catch(function(err) {
                return res.status(501).json({ message: "Error registering user." });
            });
        }
    });
});



router.post("/landregistration", function(req, res, next) {
    var payload = req.body;
    payload.verb = "landregistration";
    var landname = req.body.landname;
    if (keyManager.doesKeyExist(landname)) {
        console.log("keys are already created for" + landname);
    } else {
        var output = keyManager.createkeys(landname);
        keyManager.savekeys(landname, output);
    }

    if (keyManager.doesKeyExist(landname)) {
        if (batchlistBytes = prepareTransactions(payload, landname)) {
            SubmitToServer(batchlistBytes);
        }
    }

})
module.exports = router;
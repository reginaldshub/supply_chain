var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var User = require("../../models/user");
var Cultivation = require("../../models/Cultivation");
var landRegistration = require("../../models/landRegistration");
var Harvest = require("../../models/Harvest");
var Inspection = require("../../models/Inspection");
var Process = require("../../models/process");
var Retail = require("../../models/retail")
const { prepareTransactions } = require("./../prepareTransaction");
const { SubmitToServer } = require("./../submitToServer.js");
const KeyManager = require("./../keymanager");
const { permit } = require("../../Validators/previllageValidator.ts");
nodeMailer = require("nodemailer");

var batchlistBytes = null;
var keyManager = new KeyManager();

/*
 Get Transfered Packages Based on Respective Email onroute 
 */
router.post("/getTransferredPackages", function(req, res, next) {
    Retail.find(req.body, function(err, packages) {
        if (err) throw err;
        else res.status(200).json({ packages: packages })
    })
})

module.exports = router;
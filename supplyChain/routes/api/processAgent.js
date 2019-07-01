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
 Harvested Lands for Process Agent route
 */
router.get("/getLandsForProcessAgent", function(req, res, next) {
    landRegistration.find({ status: "yield" }, (error, lands) => {
        if (error) res.status(404).json({ message: "No lAND record Found" });
        else res.status(200).json({ land: lands });
    });
});

/*
 Create Package route
 */
router.post("/createPackage", function(req, res, next) {
    console.log(req.body)
    var payload = {
        quantity: req.body.quantity,
        rostingDuration: req.body.rostingDuration,
        packageDateTime: new Date(),
        temperature: req.body.temperature,
        internalBatchNo: req.body.internalBatchNo,
        processorName: req.body.processorName,
        processorAddress: req.body.processorAddress,
        lands: req.body.lands,
        email: req.body.email,
        verb: "createPackage"
    };
    if (keyManager.doesKeyExist(req.body.email)) {
        Process.findOne({ internalBatchNo: req.body.internalBatchNo }, (err, package) => {
            if (err) throw err;
            else if (package == null) {
                if ((batchlistBytes = prepareTransactions(payload, req.body.email))) {
                    SubmitToServer(batchlistBytes).then(respo => {
                        var savepayload = new Process({
                            quantity: req.body.quantity,
                            rostingDuration: req.body.rostingDuration,
                            packageDateTime: new Date(),
                            temperature: req.body.temperature,
                            internalBatchNo: req.body.internalBatchNo,
                            processorName: req.body.processorName,
                            processorAddress: req.body.processorAddress,
                            lands: req.body.lands,
                            ProcessAgentEmail: req.body.email,
                        });
                        savepayload.save().then(function(doc) {
                            res.status(200).json({ status: respo });
                        }).catch(error => {
                            console.log("error", error);
                        });
                    });
                }
            } else {
                res.status(403).json({ message: "Package already Exists" });
            }
        })
    }
})

/*
 Update Price in Process agent route
 */
router.post("/updatePackagePrice/:internalBatchNo", function(req, res, next) {
    var payload = {
        email: req.body.email,
        setPrice: req.body.setPrice,
        verb: "updateProcessDetails"
    };
    if (keyManager.doesKeyExist(req.body.email)) {
        if ((batchlistBytes = prepareTransactions(payload, req.body.email))) {
            SubmitToServer(batchlistBytes).then(respo => {
                let updateStatus = { setPrice: req.body.setPrice }
                Process.updateOne({ internalBatchNo: req.params.internalBatchNo }, { $set: updateStatus }, { new: true }).then(updatedResponse => {
                    if (!updatedResponse) {
                        return res.status(404).send({ message: "error" });
                    } else {
                        res.status(200).send({ message: "Updated Successfully" });
                    }
                }).catch(error => {
                    console.log("error", error);
                });
            });
        }
    }
})

/*
 get Package Based on email route
 */
router.get("/getPackage/:email", function(req, res, next) {
    Process.find({ ProcessAgentEmail: req.params.email }, (error, package) => {
        if (error) res.status(404).json({ message: "No User record Found" });
        res.status(200).json({ package: package });
    });
});

/*
 get Package Based on id route
 */
router.get("/getPackages/:id", function(req, res, next) {
    console.log(req.params.id);
    Process.findOne({ internalBatchNo: req.params.id }, (error, package) => {
        if (error) res.status(404).json({ message: "No Package record Found" });
        res.status(200).json({ package: package });
    });
});

/*
 Transfer Package route
 */
router.post("/transferPackage", function(req, res, next) {
    if (keyManager.doesKeyExist(req.body.retailAgentEmail)) {
        var retailAgentPublicKey = keyManager.readpublickey(req.body.retailAgentEmail)
        var payload = {
            email: req.body.email,
            retailAgentPublicKey: retailAgentPublicKey,
            internalBatchNo: req.body.internalBatchNo,
            verb: "transferPackage"
        };
        if (keyManager.doesKeyExist(req.body.email)) {
            Process.findOne({ internalBatchNo: req.body.internalBatchNo }, (err, package) => {
                if (err) throw err;
                if (package == null) {
                    res.status(404).json({ message: "NO Entry Found" })
                } else {
                    if ((batchlistBytes = prepareTransactions(payload, req.body.email))) {
                        SubmitToServer(batchlistBytes).then(respo => {
                            var savepayload = new Retail({
                                quantity: package.quantity,
                                rostingDuration: package.rostingDuration,
                                packageDateTime: package.packageDateTime,
                                temperature: package.temperature,
                                internalBatchNo: package.internalBatchNo,
                                processorName: package.processorName,
                                processorAddress: package.processorAddress,
                                setPrice: package.setPrice,
                                lands: package.lands,
                                RetailAgentEmail: req.body.retailAgentEmail,
                                ProcessAgentEmail: req.body.email,
                            });

                            savepayload.save().then(function(doc) {
                                package.remove(function(err) {
                                    if (err) throw err;
                                    console.log('Data successfully deleted!');
                                    res.status(200).json({ status: respo });
                                });
                            }).catch(error => {
                                console.log("error", error);
                            });
                        });
                    }
                }

            })

        }
    } else {
        res.status(404).json({ message: "Retail Agent Not Found" })
    }
})

module.exports = router;
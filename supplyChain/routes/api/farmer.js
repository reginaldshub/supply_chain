var express = require("express");
var router = express.Router();
var Cultivation = require("../../models/Cultivation");
var landRegistration = require("../../models/landRegistration");
var Harvest = require("../../models/Harvest");
const { prepareTransactions } = require("./../prepareTransaction");
const { SubmitToServer } = require("./../submitToServer");
const KeyManager = require("./../keymanager");
const { permit } = require("../../middleware/previllageValidator.ts");
nodeMailer = require("nodemailer");

var batchlistBytes = null;
var keyManager = new KeyManager();


/*
    Land Registration route
 */
router.post("/landregistration", function(req, res, next) {
    console.log(req.body)
    var payload = {
        RegistrationNo: req.body.RegistrationNo,
        FarmerName: req.body.FarmerName,
        FarmAddress: req.body.FarmAddress,
        State: req.body.State,
        Country: req.body.Country,
        ExporterName: req.body.ExporterName,
        ImporterName: req.body.ImporterName,
        email: req.body.email,
        DateOfRegistration: new Date(),
        verb: "landregistration",
        status: "cultivate",
        inspectionStatus: false
    };
    if (keyManager.doesKeyExist(req.body.email)) {
        console.log("keys are already created for" + req.body.email);
    } else {
        var output = keyManager.createkeys(req.body.email);
        keyManager.savekeys(req.body.email, output);
    }
    if (keyManager.doesKeyExist(req.body.email)) {
        landRegistration.findOne({ RegistrationNo: req.body.RegistrationNo },
            (error, lands) => {
                // if no lands are registrerd
                if (lands == null) {
                    if ((batchlistBytes = prepareTransactions(payload, req.body.email))) {
                        SubmitToServer(batchlistBytes).then(respo => {
                            console.log("respo", respo.data[0].id);
                            var savepayload = new landRegistration({
                                RegistrationNo: req.body.RegistrationNo,
                                FarmerName: req.body.FarmerName,
                                FarmAddress: req.body.FarmAddress,
                                State: req.body.State,
                                Country: req.body.Country,
                                ExporterName: req.body.ExporterName,
                                ImporterName: req.body.ImporterName,
                                email: req.body.email,
                                DateOfRegistration: new Date(),
                                state: respo.data[0].id
                            });

                            savepayload.save().then(function(doc) {
                                    res.status(200).json({ status: respo });
                                })
                                .catch(error => {
                                    console.log("error", error);
                                });
                        });
                    }
                } else {
                    res.status(403).json({ message: "Already Land exists with that Registration Number" });
                }
            })
    }
});

/*
 Get Lands By Farmer's Email address route
 */
router.get("/getLandsByFarmerEmail/:email", function(req, res, next) {
    landRegistration.find({ email: req.params.email }, (error, lands) => {
        if (error) throw error;
        else res.status(200).json({ allLands: lands });
    });
});

/*
 Cultivation route
 */
router.post("/startcultivation", function(req, res, next) {
    var payload = {
        FarmerName: req.body.FarmerName,
        RegistrationNo: req.body.RegistrationNo,
        CropVariety: req.body.CropVariety,
        Dateofstart: new Date(),
        verb: "startcultivation"
    };

    let updateStatus = { status: "harvest" };
    landRegistration.updateOne({ RegistrationNo: req.body.RegistrationNo }, { $set: updateStatus }, { new: true }).then(updatedResponse => {
        if (!updatedResponse) {
            return res.status(404).send({
                message: "error"
            });
        } else {
            if (keyManager.doesKeyExist(req.body.email)) {
                if (batchlistBytes = prepareTransactions(payload, req.body.email)) {
                    SubmitToServer(batchlistBytes).then(respo => {
                        var savepayload = new Cultivation({
                            CropVariety: req.body.CropVariety,
                            Dateofstart: new Date(),
                            RegistrationNo: req.body.RegistrationNo
                        });
                        savepayload.save().then(function(doc) {
                            console.log(doc);
                            res.status(200).json({ status: respo });
                        }).catch(error => {
                            console.log("error", error);
                        });
                    });
                }
            }
        }
    }).catch(err => {
        // if (err.kind === "ObjectId") {
        //     return res.status(404).send({
        //         message: "Land not found with id " + req.body.RegistrationNo
        //     });
        // }
        return res.status(500).send({ message: "Error updating status with id " + req.body.RegistrationNo });
    });
});


/*
 Perform Harvest route
 */
router.post("/performharvest", function(req, res, next) {
    var payload = {
        FarmerName: req.body.FarmerName,
        RegistrationNo: req.body.RegistrationNo,
        CropVariety: req.body.CropVariety,
        Temperature: req.body.Temperature,
        Humidity: req.body.Humidity,
        Dateofharvest: new Date(),
        Quantity: req.body.Quantity,
        verb: "performharvest"
    };
    let updateStatus = { status: "yield" };
    landRegistration.updateOne({ RegistrationNo: req.body.RegistrationNo }, { $set: updateStatus }, { new: true })
        .then(updatedResponse => {
            if (!updatedResponse) {
                return res.status(404).send({ message: "error" });
            } else {
                if (keyManager.doesKeyExist(req.body.email)) {
                    if (batchlistBytes = prepareTransactions(payload, req.body.email)) {
                        SubmitToServer(batchlistBytes).then(respo => {
                            var savepayload = new Harvest({
                                CropVariety: req.body.CropVariety,
                                Temperature: req.body.Temperature,
                                Humidity: req.body.Humidity,
                                Dateofharvest: new Date(),
                                Quantity: req.body.Quantity,
                                RegistrationNo: req.body.RegistrationNo
                            });
                            savepayload.save().then(function(doc) {
                                console.log(doc);
                                res.status(200).json({ status: respo });
                            }).catch(error => {
                                console.log("error", error);
                            });
                        });
                    }
                }
            }
        }).catch(err => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Land not found with id " + req.body.RegistrationNo
                });
            }
            return res.status(500).send({ message: "Error updating status with id " + req.body.RegistrationNo });
        });
});

/*
 Cultivation Details route
 */
router.get("/getCultivationDetails/:RegistrationNo", function(req, res, next) {
    Cultivation.findOne({ RegistrationNo: req.params.RegistrationNo },
        (error, cultivationDetails) => {
            if (error) {
                res.status(404).json({ message: "No Cultivation record Found" });
            }
            landRegistration.findOne({ RegistrationNo: req.params.RegistrationNo },
                (error, lands) => {
                    res.status(200).json({ land: lands, cultivationDetails: cultivationDetails });
                }
            );
        }
    );
});

/*
 Harvest Details route
 */
router.get("/getHarvestDetails/:RegistrationNo", function(req, res, next) {
    Harvest.findOne({ RegistrationNo: req.params.RegistrationNo },
        (error, harvestDetails) => {
            if (error) res.status(404).json({ message: "No Harvest record Found" });

            Cultivation.findOne({ RegistrationNo: req.params.RegistrationNo },
                (error, cultivationDetails) => {
                    if (error)
                        res.status(404).json({ message: "No Cultivation record Found" });
                    landRegistration.findOne({ RegistrationNo: req.params.RegistrationNo },
                        (error, lands) => {
                            if (error)
                                res.status(404).json({ message: "No lAND record Found" });
                            res.status(200).json({
                                land: lands,
                                cultivationDetails: cultivationDetails,
                                harvestDetails: harvestDetails
                            });
                        }
                    );
                }
            );
        }
    );
});


/*
 Get Lands By Registration Number route
 */
router.get("/getLandById/:RegistrationNo", function(req, res, next) {
    // Querying based on RegistrationNo
    landRegistration.findOne({ RegistrationNo: req.params.RegistrationNo },
        (error, lands) => {
            if (error) throw error;
            Inspection.find({ RegistrationNo: req.params.RegistrationNo },
                (error, inspectionDetails) => {
                    if (error) throw error;
                    Cultivation.find({ RegistrationNo: req.params.RegistrationNo },
                        (error, cultivationtionDetails) => {
                            if (error) throw error;
                            Harvest.find({ RegistrationNo: req.params.RegistrationNo },
                                (error, harvestDetails) => {
                                    if (error) throw error;
                                    Inspection.find({ RegistrationNo: req.params.RegistrationNo },
                                        (error, inspectionDetails) => {
                                            if (error) throw error;
                                            else res.status(200).json({
                                                land: lands,
                                                inspectionDetails: inspectionDetails,
                                                cultivationtionDetails: cultivationtionDetails,
                                                harvestDetails: harvestDetails,
                                                inspectionDetails: inspectionDetails
                                            });
                                        })

                                }
                            );
                        }
                    );
                }
            );
        }
    );
});


module.exports = router;
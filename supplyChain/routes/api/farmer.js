var express = require("express");
var router = express.Router();
var Cultivation = require("../../models/Cultivation");
var landRegistration = require("../../models/landRegistration");
var Harvest = require("../../models/Harvest");
var Inspection = require("./../../models/Inspection")
const { prepareTransactions } = require("./../prepareTransaction");
const { SubmitToServer } = require("./../submitToServer");
const KeyManager = require("./../keymanager");
const { permit } = require("../../Validators/previllageValidator.ts");
nodeMailer = require("nodemailer");

var batchlistBytes = null;
var keyManager = new KeyManager();


/*
    Land Registration route
 */
router.post("/landregistration", function(req, res, next) {
    if (req.body != null) {
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
                                // if (EventData = initWebSocket("f6aa54")) {
                                //     console.log("EventData", EventData)
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
                                    // state: respo.data[0].id,
                                    status: "cultivate",
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
        } else {
            res.status(404).json({ message: "Key Not Found" });
        }
    } else {
        res.status(400).json({ message: "empty Body" });
    }
});

/*
 Get Lands By Farmer's Email address route
 */
router.get("/getLandsByFarmerEmail/:email", function(req, res, next) {
    if (req.params.email != null) {
        landRegistration.find({ email: req.params.email }, (error, lands) => {
            if (error) throw error;
            else res.status(200).json({ allLands: lands });
        });
    } else {
        res.status(400).json({ message: "empty Params" });
    }
});

/*
 Cultivation route
 */
router.post("/startcultivation", function(req, res, next) {
    if (req.body != null) {
        console.log("cultivation", req.body)
        var payload = {
            FarmerName: req.body.FarmerName,
            RegistrationNo: req.body.RegistrationNo,
            CropName: req.body.CropName,
            Dateofstart: req.body.Dateofstart,
            CropSeason: req.body.CropSeason,
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
                                CropName: req.body.CropName,
                                Dateofstart: req.body.Dateofstart,
                                CropSeason: req.body.CropSeason,
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
                } else {
                    res.status(400).json({ message: "Key Does not exists" });
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
    } else {
        res.status(400).json({ message: "empty Body" });
    }
});


/*
 Perform Harvest route
 */
router.post("/performharvest", function(req, res, next) {
    if (req.body != null) {
        let harvestDetails = req.body.harvest_details;
        let landDetails = req.body.land_details;
        var payload = {
            FarmerName: landDetails.FarmerName,
            CropVariety: harvestDetails.CropVariety,
            CropMeasureCategory: harvestDetails.CropMeasureCategory,
            DateofEnd: harvestDetails.DateofEnd,
            Dateofstart: harvestDetails.Dateofstart,
            Humidity: harvestDetails.Humidity,
            HumidityUnit: harvestDetails.HumidityUnit,
            Quantity: harvestDetails.Quantity,
            QuantityUnit: harvestDetails.QuantityUnit,
            RegistrationNo: req.body.RegistrationNo,
            TemerpatureUnit: harvestDetails.TemerpatureUnit,
            Temperature: harvestDetails.Temperature,
            verb: "performharvest"
        };
        let updateStatus = { status: "yield" };
        landRegistration.updateOne({ RegistrationNo: req.body.RegistrationNo }, { $set: updateStatus }, { new: true })
            .then(updatedResponse => {
                if (!updatedResponse) {
                    return res.status(404).send({ message: "error" });
                } else {
                    if (keyManager.doesKeyExist(req.body.land_details.email)) {
                        if (batchlistBytes = prepareTransactions(payload, req.body.land_details.email)) {
                            SubmitToServer(batchlistBytes).then(respo => {
                                var savepayload = new Harvest({
                                    FarmerName: landDetails.FarmerName,
                                    CropVariety: harvestDetails.CropVariety,
                                    CropMeasureCategory: harvestDetails.CropMeasureCategory,
                                    DateofEnd: harvestDetails.DateofEnd,
                                    Dateofstart: harvestDetails.Dateofstart,
                                    Humidity: harvestDetails.Humidity,
                                    HumidityUnit: harvestDetails.HumidityUnit,
                                    Quantity: harvestDetails.Quantity,
                                    QuantityUnit: harvestDetails.QuantityUnit,
                                    RegistrationNo: req.body.RegistrationNo,
                                    TemerpatureUnit: harvestDetails.TemerpatureUnit,
                                    Temperature: harvestDetails.Temperature,
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
    } else {
        res.status(400).json({ message: "empty Body" });
    }
});

/*
 Cultivation Details route
 */
router.get("/getCultivationDetails/:RegistrationNo", function(req, res, next) {
    if (req.params != null) {
        Cultivation.findOne({ RegistrationNo: req.params.RegistrationNo },
            (error, cultivationDetails) => {
                if (error) {
                    res.status(404).json({ message: "No Cultivation record Found" });
                }
                landRegistration.findOne({ RegistrationNo: req.params.RegistrationNo },
                    (error, lands) => {
                        if (error)
                            res.status(404).json({ message: "No Land record Found" });
                        res.status(200).json({ land: lands, cultivationDetails: cultivationDetails });
                    }
                );
            });
    } else {
        res.status(400).json({ message: "empty Params" });
    }
});

/*
 Harvest Details route
 */
router.get("/getHarvestDetails/:RegistrationNo", function(req, res, next) {
    if (req.params != null) {
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
                            });
                    });
            });
    } else {
        res.status(400).json({ message: "empty Params" });
    }
});


/*
 Get Lands By Registration Number route
 */
router.get("/getLandById/:RegistrationNo", function(req, res, next) {
    // Querying based on RegistrationNo
    if (req.params != null) {
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
    } else {
        res.status(400).json({ message: "empty Params" });
    }
});


module.exports = router;
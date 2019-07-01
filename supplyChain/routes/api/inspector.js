var express = require("express");
var router = express.Router();
var landRegistration = require("../../models/landRegistration");
var Inspection = require("../../models/Inspection");
const { prepareTransactions } = require("./../prepareTransaction");
const { SubmitToServer } = require("./../submitToServer");
const KeyManager = require("./../keymanager");
const { permit } = require("./../../Validators/previllageValidator.ts");
nodeMailer = require("nodemailer");

var batchlistBytes = null;
var keyManager = new KeyManager();

/*
 Inspection Lands route
 */
router.get("/getLandsForInspection", function(req, res, next) {
    landRegistration.find({ status: "harvest" }, (error, lands) => {
        if (error) res.status(404).json({ message: "No lAND record Found" });
        else res.status(200).json({ land: lands });
    });
});

// permit('inspector'),
/*
 Adding Inspection Details route
 */
router.post("/inspectionReport", function(req, res, next) {
    console.log(req.body)
    if (req.body != null) {
        let inspectionDetails = req.body.inspection_details;
        let body = req.body;
        var FarmersPublicKey = keyManager.readpublickey(req.body.email)
        var payload = {
            CropVariety: inspectionDetails.CropVariety,
            CropSeason: inspectionDetails.CropSeason,
            CropName: inspectionDetails.CropName,
            Temperature: inspectionDetails.Temperature,
            TemerpatureUnit: inspectionDetails.TemerpatureUnit,
            Humidity: inspectionDetails.Humidity,
            HumidityUnit: inspectionDetails.HumidityUnit,
            InspectionDate: inspectionDetails.InspectionDate,
            InspectionReport: body.InspectionReport,
            RegistrationNo: body.RegistrationNo,
            InspectorName: body.InspectorName,
            FarmersPublicKey: FarmersPublicKey,
            FarmerName: body.land_details.FarmerName,
            verb: "landInspection"
        };
        let updateStatus = { inspectionStatus: "true" };
        landRegistration.updateOne({ RegistrationNo: req.body.RegistrationNo }, { $set: updateStatus }, { new: true })
            .then(updatedResponse => {
                if (!updatedResponse) {
                    return res.status(404).send({ message: "error" });
                } else {
                    if (keyManager.doesKeyExist(req.body.email)) {
                        if (batchlistBytes = prepareTransactions(payload, req.body.email)) {
                            SubmitToServer(batchlistBytes).then(respo => {
                                Inspection.findOne({ RegistrationNo: req.body.RegistrationNo },
                                    function(err, allInspectionData) {
                                        if (err) throw err;
                                        if (allInspectionData != null && allInspectionData.InspectionData.length > 0) {
                                            Inspection.findOneAndUpdate({ RegistrationNo: body.RegistrationNo }, {
                                                    $push: {
                                                        InspectionData: {
                                                            CropVariety: inspectionDetails.CropVariety,
                                                            CropSeason: inspectionDetails.CropSeason,
                                                            CropName: inspectionDetails.CropName,
                                                            Temperature: inspectionDetails.Temperature,
                                                            TemerpatureUnit: inspectionDetails.TemerpatureUnit,
                                                            Humidity: inspectionDetails.Humidity,
                                                            HumidityUnit: inspectionDetails.HumidityUnit,
                                                            InspectionDate: inspectionDetails.InspectionDate,
                                                            InspectionReport: body.InspectionReport,
                                                            RegistrationNo: body.RegistrationNo,
                                                            InspectorName: body.InspectorName,
                                                        }
                                                    }
                                                },
                                                function(err, updatedres) {
                                                    if (err) throw err;
                                                    res.status(200).send({
                                                        message: "updated inspection details",
                                                        status: "COMMITTED"
                                                    });
                                                }
                                            );
                                        } else {
                                            var newInspection = Inspection({
                                                RegistrationNo: req.body.RegistrationNo,
                                                InspectionData: [{
                                                    CropVariety: inspectionDetails.CropVariety,
                                                    CropSeason: inspectionDetails.CropSeason,
                                                    CropName: inspectionDetails.CropName,
                                                    Temperature: inspectionDetails.Temperature,
                                                    TemerpatureUnit: inspectionDetails.TemerpatureUnit,
                                                    Humidity: inspectionDetails.Humidity,
                                                    HumidityUnit: inspectionDetails.HumidityUnit,
                                                    InspectionDate: inspectionDetails.InspectionDate,
                                                    InspectionReport: body.InspectionReport,
                                                    InspectorName: body.InspectorName,
                                                }]
                                            });
                                            newInspection.save(function(err) {
                                                if (err) throw err;
                                                res.status(200).send({
                                                    message: "updated inspection details",
                                                    status: "COMMITTED"
                                                });
                                            });
                                        }
                                    }
                                );
                            });
                        }
                    }
                }
            });
    } else {
        return res.status(400).json({ message: "Empty Body." });
    }
});

module.exports = router;
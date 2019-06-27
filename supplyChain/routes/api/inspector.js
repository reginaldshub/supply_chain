var express = require("express");
var router = express.Router();
var landRegistration = require("../../models/landRegistration");
var Inspection = require("../../models/Inspection");
const { prepareTransactions } = require("./../prepareTransaction");
const { SubmitToServer } = require("./../submitToServer");
const KeyManager = require("./../keymanager");
const { permit } = require("./../../middleware/previllageValidator.ts");
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
    var FarmersPublicKey = keyManager.readpublickey(req.body.Farmeremail)
    var payload = {
        InspectionReport: req.body.InspectionReport,
        DateofInspection: new Date(),
        RegistrationNo: req.body.RegistrationNo,
        InspectorName: req.body.InspectorName,
        FarmersPublicKey: FarmersPublicKey,
        FarmerName: req.body.FarmerName,
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
                                        Inspection.findOneAndUpdate({ RegistrationNo: req.body.RegistrationNo }, {
                                                $push: {
                                                    InspectionData: {
                                                        InspectorName: req.body.InspectorName,
                                                        InspectionReport: req.body.InspectionReport,
                                                        DateofInspection: new Date()
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
                                                InspectorName: req.body.InspectorName,
                                                InspectionReport: req.body.InspectionReport,
                                                DateofInspection: new Date()
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
});

module.exports = router;
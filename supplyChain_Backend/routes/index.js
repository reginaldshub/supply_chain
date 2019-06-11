var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var Farmer = require("../models/farmer");
var Cultivation = require("../models/Cultivation");
var landRegistration = require("./../models/landRegistration");
var Harvest = require("./../models/Harvest");
var Inspection = require("./../models/Inspection")
const { prepareTransactions } = require("./prepareTransaction");
const { SubmitToServer } = require("./sumitToServer.js");
const KeyManager = require("./keymanager");
const { permit } = require("./../middleware/previllageValidator.ts");
nodeMailer = require("nodemailer");

var batchlistBytes = null;
var keyManager = new KeyManager();

router.post("/registration", function(req, res, next) {
    console.log(req.body);
    Farmer.findOne({ email: req.body.email }, (err, userExists) => {
        if (userExists) {
            if (keyManager.doesKeyExist(req.body.name)) {
                console.log("keys are already created for" + req.body.email);
                return res.status(409).json({ message: "Farmer Already Registered." });
            }
        } else if (err) throw err;
        else {
            var output = keyManager.createkeys(req.body.name);
            keyManager.savekeys(req.body.email, output);
            var farmer = new Farmer({
                name: req.body.name,
                email: req.body.email,
                id: req.body.id,
                role: req.body.role,
                password: Farmer.hashPassword(req.body.password)
            });

            farmer
                .save()
                .then(function(doc) {
                    // function(token, farmer, done) {
                    let transporter = nodeMailer.createTransport({
                        host: "smtp.gmail.com",
                        port: 465,
                        secure: true,
                        auth: {
                            farmer: "anthony7jmj@gmail.com",
                            pass: "qnoodlnbgotuwodp"
                        }
                    });
                    let mailOptions = {
                        from: '"Reginald Anthony" <anthony7jmj@gmail.com>', // sender address
                        to: farmer.email, // list of receivers
                        subject: "Registered Successfully", // Subject line
                        text: "" // plain text body
                    };

                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return console.log(error);
                        }
                        console.log("Message %s sent: %s", info.messageId, info.response);
                        // res.status(200).send({ success: true, message: "email is verified and token is sent your mail" });
                    });
                    // }

                    return res.status(201).json({ message: "registered sucessfully" });
                })
                .catch(function(err) {
                    return res.status(501).json({ message: "Error registering Farmer." });
                });
        }
    });
});

router.post("/login", function(req, res, next) {
    console.log(req.body);
    Farmer.findOne({ email: req.body.email })
        .exec()
        .then(function(doc) {
            if (doc) {
                console.log(doc);
                if (doc.isValid(req.body.password)) {
                    // generate token
                    let token = jwt.sign({ name: doc.name }, "secret", {
                        expiresIn: "20m"
                    });

                    return res.status(200).send({
                        success: true,
                        message: "Succesfully fetched Farmer details",
                        name: doc.name,
                        id: doc.id,
                        email: doc.email,
                        role: doc.role,
                        token
                    });
                } else {
                    return res.status(401).json({ message: " Invalid Credentials" });
                }
            } else {
                return res.status(404).json({ message: "Farmer is not registered." });
            }
        })
        .catch(function(err) {
            return res.status(501).json({ message: "Some internal error" });
        });
});

router.post("/landregistration", function(req, res, next) {
    var payload = {
        RegistrationNo: req.body.RegistrationNo,
        FarmerName: req.body.FarmerName,
        FarmAddress: req.body.FarmAddress,
        State: req.body.State,
        Country: req.body.Country,
        ExporterName: req.body.ExporterName,
        ImporterName: req.body.ImporterName,
        DateOfRegistration: new Date(),
        verb: "landregistration",
        status: "cultivate"
    };
    // payload.verb = "landregistration";
    console.log(payload);
    let FarmerName = req.body.FarmerName;
    if (keyManager.doesKeyExist(FarmerName)) {
        console.log("keys are already created for" + FarmerName);
    } else {
        var output = keyManager.createkeys(FarmerName);
        keyManager.savekeys(FarmerName, output);
    }

    if (keyManager.doesKeyExist(FarmerName)) {
        if ((batchlistBytes = prepareTransactions(payload, FarmerName))) {
            SubmitToServer(batchlistBytes).then(respo => {
                console.log("respo", respo);
                var savepayload = new landRegistration({
                    RegistrationNo: req.body.RegistrationNo,
                    FarmerName: req.body.FarmerName,
                    FarmAddress: req.body.FarmAddress,
                    State: req.body.State,
                    Country: req.body.Country,
                    ExporterName: req.body.ExporterName,
                    ImporterName: req.body.ImporterName,
                    DateOfRegistration: new Date(),
                    status: "cultivate"
                });

                savepayload
                    .save()
                    .then(function(doc) {
                        console.log(doc);
                        res.status(200).json({ status: respo });
                    })
                    .catch(error => {
                        console.log("error", error);
                    });
            });
        }
    }
});

router.get("/allLands", function(req, res, next) {
    landRegistration.find({}, (error, lands) => {
        res.status(200).json({ allLands: lands });
    });
});

router.get("/getLandById/:RegistrationNo", function(req, res, next) {
    landRegistration.findOne({ RegistrationNo: req.params.RegistrationNo },
        (error, lands) => {
            res.status(200).json({ land: lands });
        }
    );
});

router.post("/startcultivation", function(req, res, next) {
    console.log(req.body);
    var payload = {
        FarmerName: req.body.FarmerName,
        RegistrationNo: req.body.RegistrationNo,
        CropVariety: req.body.CropVariety,
        Dateofstart: new Date(),
        verb: "startcultivation"
    };

    let updateStatus = { status: "harvest" };
    landRegistration
        .updateOne({ RegistrationNo: req.body.RegistrationNo }, { $set: updateStatus }, { new: true })
        .then(updatedResponse => {
            if (!updatedResponse) {
                return res.status(404).send({
                    message: "error"
                });
            } else {
                console.log("updated");
                if (keyManager.doesKeyExist(req.body.FarmerName)) {
                    if (
                        (batchlistBytes = prepareTransactions(payload, req.body.FarmerName))
                    ) {
                        SubmitToServer(batchlistBytes).then(respo => {
                            console.log("respo", respo);
                            var savepayload = new Cultivation({
                                CropVariety: req.body.CropVariety,
                                Dateofstart: new Date(),
                                RegistrationNo: req.body.RegistrationNo
                            });

                            savepayload
                                .save()
                                .then(function(doc) {
                                    console.log(doc);
                                    res.status(200).json({ status: respo });
                                })
                                .catch(error => {
                                    console.log("error", error);
                                });
                        });
                    }
                }
            }
        })
        .catch(err => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Land not found with id " + req.body.RegistrationNo
                });
            }
            return res.status(500).send({
                message: "Error updating status with id " + req.body.RegistrationNo
            });
        });
});

router.get("/getCultivationDetails/:RegistrationNo", function(req, res, next) {
    Cultivation.findOne({ RegistrationNo: req.params.RegistrationNo },
        (error, cultivationDetails) => {
            if (error)
                res.status(404).json({ message: "No Cultivation record Found" });
            // res.status(200).json({ cultivationDetails: cultivationDetails })
            landRegistration.findOne({ RegistrationNo: req.params.RegistrationNo },
                (error, lands) => {
                    res
                        .status(200)
                        .json({ land: lands, cultivationDetails: cultivationDetails });
                }
            );
        }
    );
});

router.get("/getHarvestDetails/:RegistrationNo", function(req, res, next) {
    Harvest.findOne({ RegistrationNo: req.params.RegistrationNo },
        (error, harvestDetails) => {
            if (error) res.status(404).json({ message: "No Harvest record Found" });
            // res.status(200).json({ harvestDetails: harvestDetails })

            Cultivation.findOne({ RegistrationNo: req.params.RegistrationNo },
                (error, cultivationDetails) => {
                    if (error)
                        res.status(404).json({ message: "No Cultivation record Found" });
                    // res.status(200).json({ cultivationDetails: cultivationDetails, harvestDetails: harvestDetails })
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

router.get("/getFarmerProfile/:email", function(req, res, next) {
    Farmer.findOne({ email: req.params.email }, (error, profile) => {
        if (error) res.status(404).json({ message: "No Farmer record Found" });
        res.status(200).json({ profile: profile });
    });
});

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
    console.log("payload", payload);
    let updateStatus = { status: "yield" };
    landRegistration
        .updateOne({ RegistrationNo: req.body.RegistrationNo }, { $set: updateStatus }, { new: true })
        .then(updatedResponse => {
            if (!updatedResponse) {
                return res.status(404).send({
                    message: "error"
                });
            } else {
                console.log("updated");
                if (keyManager.doesKeyExist(req.body.FarmerName)) {
                    if (
                        (batchlistBytes = prepareTransactions(payload, req.body.FarmerName))
                    ) {
                        SubmitToServer(batchlistBytes).then(respo => {
                            console.log("respo", respo);
                            var savepayload = new Harvest({
                                CropVariety: req.body.CropVariety,
                                Temperature: req.body.Temperature,
                                Humidity: req.body.Humidity,
                                Dateofharvest: new Date(),
                                Quantity: req.body.Quantity,
                                RegistrationNo: req.body.RegistrationNo
                            });

                            savepayload
                                .save()
                                .then(function(doc) {
                                    console.log(doc);
                                    res.status(200).json({ status: respo });
                                })
                                .catch(error => {
                                    console.log("error", error);
                                });
                        });
                    }
                }
            }
        })
        .catch(err => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Land not found with id " + req.body.RegistrationNo
                });
            }
            return res.status(500).send({
                message: "Error updating status with id " + req.body.RegistrationNo
            });
        });
});

router.get("/getLandsForInspection", permit('inspector'), function(req, res, next) {
    landRegistration.findOne({ status: "harvest" }, (error, lands) => {
        if (error)
            res.status(404).json({ message: "No lAND record Found" });
        res.status(200).json({ land: lands });
    });
})

router.post("/inspectionReport", permit('inspector'), function(req, res, next) {
    var payload = {
        InspectionReport: req.body.InspectionReport,
        DateofInspection: new Date(),
        RegistrationNo: req.body.RegistrationNo,
        InspectorName: req.body.InspectorName,
        FarmerName: req.body.FarmerName,
        verb: "landInspection"
    };
    console.log("payload", payload);
    let updateStatus = { status: "inspected" };
    landRegistration
        .updateOne({ RegistrationNo: req.body.RegistrationNo }, { $set: updateStatus }, { new: true })
        .then(updatedResponse => {
            if (!updatedResponse) {
                return res.status(404).send({
                    message: "error"
                });
            } else {
                console.log("updated");
                if (keyManager.doesKeyExist(req.body.InspectorName)) {
                    if (
                        (batchlistBytes = prepareTransactions(payload, req.body.InspectorName))
                    ) {
                        SubmitToServer(batchlistBytes).then(respo => {
                            console.log("respo", respo);
                            var savepayload = new Inspection({
                                InspectionReport: req.body.InspectionReport,
                                DateofInspection: new Date(),
                                InspectorName: req.body.InspectorName,
                                RegistrationNo: req.body.RegistrationNo,
                            });

                            savepayload
                                .save()
                                .then(function(doc) {
                                    console.log(doc);
                                    res.status(200).json({ status: respo });
                                })
                                .catch(error => {
                                    console.log("error", error);
                                });
                        });
                    }
                }
            }
        })
        .catch(err => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Land not found with id " + req.body.RegistrationNo
                });
            }
            return res.status(500).send({
                message: "Error updating status with id " + req.body.RegistrationNo
            });
        });
})


// router.post("/startharvest", function(req, res, next) {
//     var payload = req.body;
//     payload.verb = "startcultivation";
//     // reg_no, farm_address
//     // , farmer_name
//     let land_reg_no = req.body.reg_no;
//     if (keyManager.doesKeyExist(land_reg_no)) {
//         console.log("keys are already created for" + land_reg_no);
//     } else {
//         // var output = keyManager.createkeys(land_reg_no);
//         // keyManager.savekeys(land_reg_no, output);
//         console.log("land not registered");
//     }

//     if (keyManager.doesKeyExist(land_reg_no)) {
//         if ((batchlistBytes = prepareTransactions(payload, land_reg_no))) {
//             SubmitToServer(batchlistBytes);
//         }
//     }
// });
module.exports = router;
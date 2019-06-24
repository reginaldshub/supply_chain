var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var User = require("../models/user");
var Cultivation = require("../models/Cultivation");
var landRegistration = require("./../models/landRegistration");
var Harvest = require("./../models/Harvest");
var Inspection = require("./../models/Inspection");
var Process = require("./../models/process");
var Retail = require("./../models/retail")
const { prepareTransactions } = require("./prepareTransaction");
const { SubmitToServer } = require("./sumitToServer.js");
const KeyManager = require("./keymanager");
const { permit } = require("./../middleware/previllageValidator.ts");
nodeMailer = require("nodemailer");

var batchlistBytes = null;
var keyManager = new KeyManager();

/*
  User Registration route
 */
router.post("/registration", function(req, res, next) {
    // check if email is already registered
    User.findOne({ email: req.body.email }, (err, userExists) => {
        if (userExists) {
            return res.status(409).json({ message: "User Already Registered." });
        } else if (err) throw err;
        else {
            var output = keyManager.createkeys(req.body.email);
            keyManager.savekeys(req.body.email, output);
            var user = new User({
                name: req.body.name,
                email: req.body.email,
                id: req.body.id,
                role: req.body.role,
                // password: User.hashPassword(req.body.password),
                password: req.body.password
            });
            // saving the user registration details to db
            user.save().then((doc) => {
                // sending mail to successfully registered user
                // let transporter = nodeMailer.createTransport({
                //     host: "smtp.gmail.com",
                //     port: 465,
                //     secure: true,
                //     auth: {
                //         user: "anthony7jmj@gmail.com",
                //         pass: "qnoodlnbgotuwodp"
                //     }
                // });
                // let mailOptions = {
                //     from: '"Reginald Anthony" <anthony7jmj@gmail.com>', // sender address
                //     to: user.email, // list of receivers
                //     subject: "Registered Successfully", // Subject line
                //     text: "" // plain text body
                // };

                // transporter.sendMail(mailOptions, (error, info) => {
                //     if (error) {
                //         return console.log(error);
                //     }
                //     console.log("Message %s sent: %s", info.messageId, info.response);
                // });
                return res.status(201).json({ message: "registered sucessfully" });
            }).catch(function(err) {
                return res.status(501).json({ message: "Error registering User." });
            });
        }
    });
});

/*
  User Login route
 */
router.post("/login", function(req, res, next) {
    console.log(req.body)
    User.findOne({ email: req.body.email }).exec().then(function(userDetails) {
        if (userDetails) {
            console.log(userDetails)
            if (userDetails.password == req.body.password) {
                // generate token with expiry time
                let token = jwt.sign({ name: userDetails.name }, "secret", {
                    expiresIn: "20m"
                });
                return res.status(200).send({
                    success: true,
                    message: "Succesfully fetched User details",
                    name: userDetails.name,
                    id: userDetails.id,
                    email: userDetails.email,
                    role: userDetails.role,
                    token
                });
            } else {
                return res.status(401).json({ message: " Invalid Credentials" });
            }
        } else {
            return res.status(404).json({ message: "User is not registered." });
        }
    }).catch(function(err) {
        return res.status(501).json({ message: "Some internal error" });
    });
});

/*
    Land Registration route
 */
router.post("/landregistration", function(req, res, next) {
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
                            console.log("respo", respo);
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
                                status: "cultivate"
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
 Profile Details route
 */
router.get("/getUserProfile/:email", function(req, res, next) {
    User.findOne({ email: req.params.email }, (error, profile) => {
        if (error) res.status(404).json({ message: "No User record Found" });
        res.status(200).json({ profile: profile });
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
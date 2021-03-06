var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var User = require("../../models/user");
const KeyManager = require("./../keymanager");
const { permit } = require("../../Validators/previllageValidator.ts");
nodeMailer = require("nodemailer");
var keyManager = new KeyManager();

/*
  User Registration route
 */
router.post("/registration", function(req, res, next) {
    // Applicaion Key Generation
    if (req.body != null) {
        if (keyManager.doesKeyExist("supplyChain")) {
            console.log("Application keys are already created");
        } else {
            var output = keyManager.createkeys("supplyChain");
            keyManager.savekeys("supplyChain", output);
        }

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
    } else {
        return res.status(400).json({ message: "Empty Body." });
    }
});

/*
  User Login route
 */
router.post("/login", function(req, res, next) {
    // Applicaion Key Generation
    if (req.body != null) {
        if (keyManager.doesKeyExist("supplyChain")) {
            console.log("Application keys are already created");
        } else {
            var output = keyManager.createkeys("supplyChain");
            keyManager.savekeys("supplyChain", output);
        }
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
    } else {
        return res.status(400).json({ message: "Empty Body." });
    }
});

/*
 Profile Details route
 */
router.get("/getUserProfile/:email", function(req, res, next) {
    if (req.params != null) {
        User.findOne({ email: req.params.email }, (error, profile) => {
            if (error) res.status(404).json({ message: "No User record Found" });
            res.status(200).json({ profile: profile });
        });
    } else {
        return res.status(400).json({ message: "Empty Params." });
    }
});
module.exports = router;
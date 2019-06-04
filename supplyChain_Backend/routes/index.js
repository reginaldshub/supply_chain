var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var User = require("../models/user");
var landRegistration = require("./../models/landRegistration");
const { prepareTransactions } = require("./prepareTransaction");
const { SubmitToServer } = require("./sumitToServer.js");
const KeyManager = require("./keymanager");
const { permit } = require("./../middleware/previllageValidator.ts")
nodeMailer = require('nodemailer')

var batchlistBytes = null;
var keyManager = new KeyManager();

router.post("/registration", function(req, res, next) {
    console.log(req.body)
    User.findOne({ email: req.body.email }, (err, userExists) => {
        if (userExists) {
            if (keyManager.doesKeyExist(req.body.email)) {
                console.log("keys are already created for" + req.body.email);
                return res.status(409).json({ message: "User Already Registered." });
            }
        } else if (err) throw err;
        else {

            var output = keyManager.createkeys(req.body.email);
            keyManager.savekeys(req.body.email, output);
            var user = new User({
                name: req.body.name,
                email: req.body.email,
                id: req.body.id,
                role: req.body.role,
                password: User.hashPassword(req.body.password)
            });

            user.save().then(function(doc) {

                // function(token, user, done) {
                let transporter = nodeMailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: 'anthony7jmj@gmail.com',
                        pass: 'qnoodlnbgotuwodp'
                    }
                });
                let mailOptions = {
                    from: '"Reginald Anthony" <anthony7jmj@gmail.com>', // sender address
                    to: user.email, // list of receivers
                    subject: "Registered Successfully", // Subject line
                    text: "", // plain text body
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message %s sent: %s', info.messageId, info.response);
                    // res.status(200).send({ success: true, message: "email is verified and token is sent your mail" });

                });
                // }


                return res.status(201).json({ message: "registered sucessfully" });
            }).catch(function(err) {
                return res.status(501).json({ message: "Error registering user." });
            });
        }
    });
});

router.post('/login', function(req, res, next) {
    console.log(req.body);
    User.findOne({ email: req.body.email }).exec()
        .then(function(doc) {
            if (doc) {
                console.log(doc);
                if (doc.isValid(req.body.password)) {
                    // generate token
                    let token = jwt.sign({ name: doc.name }, 'secret', { expiresIn: '20m' });

                    return res.status(200).send({ success: true, message: "Succesfully fetched user details", name: doc.name, id: doc.id, email: doc.email, role: doc.role, token });

                } else {
                    return res.status(401).json({ message: ' Invalid Credentials' });
                }
            } else {
                return res.status(404).json({ message: 'User is not registered.' })
            }
        }).catch(function(err) {
            return res.status(501).json({ message: 'Some internal error' });
        })
})

router.post("/landregistration", permit('farmer'), function(req, res, next) { <<
    <<
    << < HEAD
    var payload = new landRegistration(req.body);

    ===
    ===
    =
    var payload = req.body;
    console.log("front receieved", payload) >>>
        >>>
        > 04882e477576 af126bbc9c3fd437adf262e71269
    payload.verb = "landregistration";
    let land_reg_no = req.body.reg_no;
    if (keyManager.doesKeyExist(land_reg_no)) {
        console.log("keys are already created for" + land_reg_no);
    } else {
        var output = keyManager.createkeys(land_reg_no);
        keyManager.savekeys(land_reg_no, output);
    }

    if (keyManager.doesKeyExist(land_reg_no)) {
        if (batchlistBytes = prepareTransactions(payload, land_reg_no)) {
            SubmitToServer(batchlistBytes);
            res.send("done")
        }
    }

})


router.post("/startcultivation", function(req, res, next) {
    var payload = req.body;
    payload.verb = "startcultivation";
    // reg_no, farm_address
    // , farmer_name
    let land_reg_no = req.body.reg_no;
    if (keyManager.doesKeyExist(land_reg_no)) {
        console.log("keys are already created for" + land_reg_no);
    } else {
        // var output = keyManager.createkeys(land_reg_no);
        // keyManager.savekeys(land_reg_no, output);
        console.log("land not registered")
    }

    if (keyManager.doesKeyExist(land_reg_no)) {
        if (batchlistBytes = prepareTransactions(payload, land_reg_no)) {
            SubmitToServer(batchlistBytes);
        }
    }

})
module.exports = router;
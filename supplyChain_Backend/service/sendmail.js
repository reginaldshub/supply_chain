nodeMailer = require('nodemailer')

SendEmail = (req, res) => {
    console.log(req.body)
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
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.body, // plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
};

module.exports = { SendEmail }
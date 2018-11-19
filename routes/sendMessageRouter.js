const express = require("express");
const bodyParser = require("body-parser");

const sendMessageRouter = express.Router();

sendMessageRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log('in sendMessageRouter.all');
    next();
})
    .post(function (req, res, next) {
    // var item = {
    //     'comment': {'S': res.body.comment},
    //     'name': {'S': res.body.name},
    //     'email': {'S': res.body.email},
    //     'website': {'S': res.body.website}
    // }
    // console.log('comment:' + item.comment + ' name:' + item.name + ' email:' + item.email + ' website:' + item.website);
        console.log(req.body);
        var mail = require("nodemailer").mail;

        mail({
            from: "Bayarea Funs ✔ <funsbayarea@gmail.com>", // sender address
            to: "funsbayarea@gmail.com", // list of receivers
            subject: "Message ✔", // Subject line
            text: req.body, // plaintext body
            html: "<b>req.body</b>" // html body
        });
        res.end('Done!');
    });

module.exports = sendMessageRouter;
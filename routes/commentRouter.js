const express = require("express");
const bodyParser = require("body-parser");

const commentRouter = express.Router();

commentRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log('in route.all');
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
        res.end('Done!');
    });

module.exports = commentRouter;
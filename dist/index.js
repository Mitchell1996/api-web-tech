'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _keywords = require('./model/keywords');

var _keywords2 = _interopRequireDefault(_keywords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialization
/**
 * Created by s141689 on 4-1-2016.
 */
// Imports

const app = (0, _express2.default)();
const router = _express2.default.Router();
const port = process.env.PORT || 5000;

app.use(_bodyParser2.default.urlencoded({ extended: true })).use(_bodyParser2.default.json()).use(_express2.default.static(__dirname + '/')).use('/v1/api', router).listen(port);

// Database
_mongoose2.default.connect('mongodb://mitchell:api@ds039185.mongolab.com:39185/web-tech-api');
const conn = _mongoose2.default.connection;
conn.on("error", error => {
    console.log(error);
});

// Router
router.route('/keywords').options(() => {
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH");
}).post((req, res) => {
    _keywords2.default.findOne({ name: req.body.name }, (err, keyword) => {
        if (keyword !== null) {
            res.end();
        } else {
            let key = new _keywords2.default({
                name: req.body.name
            });

            key.save(err => {
                if (err) res.send(err);

                res.status(200);
                res.send({ message: "Keyword has been added!" });
            });
        }
    });
}).get((req, res) => {
    _keywords2.default.find((err, keywords) => {
        if (err) console.log(err);

        res.status(200);
        res.send(keywords);
    });
});

router.patch("/keywords/:id", (req, res) => {
    _keywords2.default.findById(req.params.id, (err, keyword) => {
        if (err) {
            console.log(err);
        }

        keyword.amountSearched++;

        keyword.save(err => {
            if (err) console.log(err);

            res.status(200);
            res.send({ message: "Added search" });
        });
    });
});
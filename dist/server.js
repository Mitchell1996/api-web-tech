"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)(); /**
                                       * Created by s141689 on 4-1-2016.
                                       */

const router = _express2.default.Router();
const port = process.env.PORT || 8888;

app.use(bodyparser.urlencoded({ extended: true })).use(bodyparser.json()).use("/v1/api", router).listen(port);
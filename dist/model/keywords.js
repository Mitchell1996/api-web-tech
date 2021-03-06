"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose2.default.Schema; /**
                                           * Created by s141689 on 4-1-2016.
                                           */

const KeywordSchema = new Schema({
  name: String,
  amountSearched: { type: Number, default: 0 }
});

exports.default = _mongoose2.default.model("Keyword", KeywordSchema);
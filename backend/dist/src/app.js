'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _router = require('./api/router');

var _router2 = _interopRequireDefault(_router);

var _config = require('../config/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect(_config.config.connectionString, { useNewUrlParser: true });

app.use((0, _cors2.default)());

app.use(bodyParser.json());

// Use router app
app.use('/api', _router2.default);

exports.default = app;
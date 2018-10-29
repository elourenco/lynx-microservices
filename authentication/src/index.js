'use strict';

const serverless = require('serverless-http');
const APP = require('../config/express');
const Routers = require('./routers');

APP.use(Routers);

module.exports = serverless(APP);

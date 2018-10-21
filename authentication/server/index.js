'use strict';

const serverless = require('serverless-http');
const APP = require('../config/express');
const routers = require('./routers');

APP.use('authentication/social', routers);

module.exports = serverless(APP);

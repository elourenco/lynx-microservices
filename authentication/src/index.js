'use strict';

const serverless = require('serverless-http');
const APP = require('../config/express');

module.exports = serverless(APP);

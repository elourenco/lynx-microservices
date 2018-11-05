'use strict';

const server = require('./src');

module.exports.authSocial = async (event, context, callback) => await server(event, context);
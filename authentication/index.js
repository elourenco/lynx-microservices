'use strict';

const server = require('./src');

module.exports.authFacebook = async (event, context, callback) => await server(event, context);
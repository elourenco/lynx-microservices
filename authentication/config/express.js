'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const { facebookConfig , transformFacebookProfile } = require('./facebook')

const corsHeaders = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  exposedHeaders: '*',
  allowedHeaders: '*'
};

const APP = express();

APP.use(cors(corsHeaders));
APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({ extended: true }));
// APP.use(compress());
// APP.use(methodOverride());
// APP.use(helmet());

passport.use(new FacebookStrategy(facebookConfig,
  async (accessToken, refreshToken, profile, done) => done(null, transformFacebookProfile(profile._json))
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

APP.use(passport.initialize());
APP.use(passport.session());

module.exports = APP
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const GoogleStrategy  = require('passport-google-oauth').OAuth2Strategy;
const OutlookStrategy = require('passport-azure-ad-oauth2')

const { outlookConfig, transformOutlookProfile } = require('./outlook');
const { facebookConfig , transformFacebookProfile } = require('./facebook');
const { googleConfig, transformGoogleProfile } = require('./google')

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
  async (accessToken, refreshToken, params, profile, done) => done(null, transformFacebookProfile(accessToken, refreshToken, params, profile._json))
));

passport.use(new GoogleStrategy(googleConfig,
  async (accessToken, refreshToken, params, profile, done) => done(null, transformGoogleProfile(accessToken, refreshToken, params, profile._json))
));

passport.use(new OutlookStrategy(outlookConfig,
  async (accessToken, refreshToken, params, profile, done) => done(null, transformOutlookProfile(accessToken, refreshToken, params, profile._json))
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

APP.use(passport.initialize());
APP.use(passport.session());

module.exports = APP
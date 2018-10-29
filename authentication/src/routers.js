'use strict';

const express = require('express');
const router = express.Router();
const passport = require('passport');
const socialFacebook = require('./social/facebook');

router.route('/authentication/social/facebook')
  .get(passport.authenticate('facebook'));

router.route('/authentication/social/facebook/callback')
  .get(passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
    socialFacebook.callback
  );

module.exports = router;
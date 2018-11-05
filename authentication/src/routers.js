'use strict';

const express = require('express');
const router = express.Router();
const passport = require('passport');
const socialFacebook = require('./social/facebook');

router.route('/authentication/social/facebook')
  .get(passport.authenticate('facebook'));

router.route('/authentication/social/google')
  .get(passport.authenticate('google', { scope: ['profile'] }));

router.route('/authentication/social/facebook/callback')
  .get(passport.authenticate('facebook', { failureRedirect: '/authentication/social/facebook' }),
    (req, res) => {
      console.log('[SocialFacebook] - callback');
      res.redirect(`lynx://login?user=${JSON.stringify(req.user)}`);
  );

router.route('/authentication/social/google/callback')
  .get(passport.authenticate('google', { failureRedirect: '/authentication/social/google' }),
    (req, res) => {
      console.log('[Socialgoogle] - callback');
      res.redirect(`lynx://login?user=${JSON.stringify(req.user)}`);
  );

module.exports = router;
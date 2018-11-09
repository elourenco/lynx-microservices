'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

router.route('/authentication/social/facebook')
  .get(passport.authenticate('facebook'));

router.route('/authentication/social/google')
  .get(passport.authenticate('google', { scope: ['profile'] }));

router.route('/authentication/social/outlook')
  .get(passport.authenticate('azure_ad_oauth2'));

router.route('/authentication/social/facebook/callback')
  .get(passport.authenticate('facebook', { failureRedirect: '/authentication/social/facebook' }),
    (req, res) => {
      console.log('[SocialFacebook] - callback');
      res.redirect(`lynx://login?user=${JSON.stringify(req.user)}`);
    }
  );

router.route('/authentication/social/google/callback')
  .get(passport.authenticate('google', { failureRedirect: '/authentication/social/google' }),
    (req, res) => {
      console.log('[SocialGoogle] - callback');
      res.redirect(`lynx://login?user=${JSON.stringify(req.user)}`);
    }
  );

router.route('/authentication/social/outlook/callback')
  .get(passport.authenticate('azure_ad_oauth2', { failureRedirect: '/authentication/social/outlook' }),
    (req, res) => {
      console.log('[SocialOutlook] - callback');
      res.redirect(`lynx://login?user=${JSON.stringify(req.user)}`);
    }
  );

module.exports = router;
'use strict';

const socialFacebook = {
  failure: (req, res) => { 
    console.log('[SocialFacebook] - failure');
    res.status(500);
  },
  callback: (req, res) => { 
    console.log('[SocialFacebook] - callback');
    res.redirect(`lynx://login?user=${JSON.stringify(req.user)}`);
  }
}

module.exports = socialFacebook
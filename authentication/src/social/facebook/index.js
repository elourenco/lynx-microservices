'use strict';

const socialFacebook = {
  callback: (req, res) => { 
    console.log('[SocialFacebook] - callback');
    res.redirect(`lynx://login?user=${JSON.stringify(req.user)}`);
  }
}

module.exports = socialFacebook
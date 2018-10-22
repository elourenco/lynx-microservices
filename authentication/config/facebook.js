'use strict';

module.exports = {
  facebookConfig: {
    clientID: '493656091151758',
    clientSecret: '947a6bec623f82b97cfe8fe09f2cfc77',
    callbackURL: 'https://localhost:3000/authentication/social/facebook/callback',
    profileFields: ['id', 'name', 'displayName', 'picture', 'email']
  },
  transformFacebookProfile: (profile) => ({
    name: profile.name,
    avatar: profile.picture.data.url
  })
}
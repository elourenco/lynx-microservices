'use strict';

module.exports = {
  facebookConfig: {
    clientID: 'INSERT-CLIENT-ID-HERE',
    clientSecret: 'INSERT-CLIENT-SECRET-HERE',
    callbackURL: 'https://localhost:3000/authentication/social/facebook/callback',
    profileFields: ['id', 'name', 'displayName', 'picture', 'email']
  },
  transformFacebookProfile: (profile) => ({
    name: profile.name,
    avatar: profile.picture.data.url,
  });
}
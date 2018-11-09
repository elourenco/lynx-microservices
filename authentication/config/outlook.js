'use strict';

// OUTLOOK_SCOPE = User.ReadBasic.All Mail.Read offline_access Mail.ReadWrite

module.exports = {
  outlookConfig: {
    clientID: 'e97ae8a3-7f80-4b29-9ef2-2c250716c1fd',
    clientSecret: 'ouI324@;wuhwtUNERBS97!?',
    callbackURL: 'https://localhost:3000/authentication/social/outlook/callback'
  },
  transformOutlookProfile: (accessToken, refreshToken, params, profile) => ({
    accessToken,
    refreshToken,
    name: profile.displayName,
    avatar: profile.image.url,
  })
}
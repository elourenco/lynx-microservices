'use strict';

module.exports = {
  googleConfig: {
    clientID: '64098520674-gg58t8aspoqehh9c43hvs40oa8gdt7ge.apps.googleusercontent.com',
    clientSecret: 'AzVX_L5gD3JZ8V_6ncJM-ZtE',
    callbackURL: 'https://localhost:3000/authentication/social/google/callback',

  },
  transformGoogleProfile: (accessToken, refreshToken, params, profile) => ({
    accessToken,
    refreshToken,
    name: profile.displayName,
    avatar: profile.image.url,
  })
}
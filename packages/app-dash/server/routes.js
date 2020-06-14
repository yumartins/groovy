const express = require('express');
const request = require('request');
require('dotenv/config');

const routes = express.Router();

const redirect_uri = process.env.APP_URL
  || 'http://localhost:3000/app';

routes.get('/', (req, res) => res.redirect(
  `${process.env.SPOTIFY_AUTH}/authorize?
    response_type=code
    &client_id=${process.env.SPOTIFY_CLIENT_ID}
    &scope=user-read-private user-read-email
    &${redirect_uri}
  `,
));

routes.get('/app', (req, res) => {
  const code = req.query.code || null;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code,
      redirect_uri,
      grant_type: 'authorization_code',
    },
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
      ).toString('base64')}`,
    },
    json: true,
  };
  request.post(authOptions, (error, response, body) => {
    const { access_token } = body;
    const uri = process.env.FRONTEND_URI || 'http://localhost:3000';
    res.redirect(`${uri}?access_token=${access_token}`);
  });
});

module.exports = routes;

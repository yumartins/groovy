const express = require('express');
const querystring = require('querystring');
const request = require('request');
require('dotenv/config');

const routes = express.Router();

const redirect_uri = `${process.env.API_URL}/app`
  || 'http://localhost:5000/app';

const query = querystring.stringify({
  response_type: 'code',
  client_id: process.env.SPOTIFY_CLIENT_ID,
  scope: 'user-read-private', // 'user-read-private user-read-email'
  redirect_uri,
});

routes.get('/', (req, res) => res.redirect(
  `${process.env.SPOTIFY_AUTH}/authorize?${decodeURIComponent(query)}`,
));

routes.get('/app', (req, res) => {
  const code = req.query.code || null;

  const authOptions = {
    url: `${process.env.SPOTIFY_AUTH}/api/token`,
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

    const uri = process.env.APP_URI || 'http://localhost:3000';

    res.redirect(`${uri}?access_token=${access_token}`);
  });
});

module.exports = routes;

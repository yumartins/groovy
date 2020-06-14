const express = require('express');
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

module.exports = routes;

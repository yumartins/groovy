const express = require('express');
const querystring = require('querystring');
const request = require('request');

const app = express();

const redirect_uri = process.env.REDIRECT_URI
  || 'http://localhost:3000/callback';

app.get('/login', (req, res) => {
  res.redirect(`https://accounts.spotify.com/authorize?${
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID || '1f8771683cc24a359bdb0abc34e3599c',
      scope: 'user-read-private user-read-email',
      redirect_uri,
    })}`);
});

app.get('/callback', (req, res) => {
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
        `${process.env.SPOTIFY_CLIENT_ID || '1f8771683cc24a359bdb0abc34e3599c'}:${process.env.SPOTIFY_CLIENT_SECRET || 'cd41367f9bf74cc8b801813b206101f0'}`,
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

const port = process.env.PORT || 8888;
console.log(`Listening on port ${port}. Go /login to initiate authentication flow.`);
app.listen(port);

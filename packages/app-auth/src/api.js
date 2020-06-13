import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});

export const auth = axios.create({
  baseURL: 'https://accounts.spotify.com/',
});

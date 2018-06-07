import axios from 'axios';
import querystring from 'querystring';

export const getSearchResults = function(searchText='', token='') {
  if(token) {
    axios.defaults.headers.common['Authorization'] = token;
  }
  let query = querystring.stringify({
    type: 'track',
    q: searchText
  });
  
  return axios.get(
    `https://api.spotify.com/v1/search?${query}`
  );
};

export const getCurrentTrack = function(token='') {
  if(token) {
    axios.defaults.headers.common['Authorization'] = token;
  }
  return axios.get(
    `https://api.spotify.com/v1/me/player/currently-playing`
  );
};

export const getFollowingArtists = function(token='') {
  if(token) {
    axios.defaults.headers.common['Authorization'] = token;
  }
  return axios.get(
    `https://api.spotify.com/v1/me/following?type=artist&limit=50`
  );
};

export const isLogged = function(token='') {
  if(token) {
    axios.defaults.headers.common['Authorization'] = token;
  }
  return axios.get(
    `https://api.spotify.com/v1/me`
  );
};
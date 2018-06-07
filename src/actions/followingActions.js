import * as types from './actionTypes';
import {getFollowingArtists} from '../services/spotifyService';

export const setFollowingArtists = (followingArtists)=>{
  return {type: types.SET_FOLLOWING_ARTISTS, followingArtists};
};

export const getFollowingArtistsAction = (token='')=>{
  return (dispatch)=>{
    return getFollowingArtists(token)
      .then((results)=>{
        if(results && results.data && results.data.artists && results.data.artists.items) {
          dispatch(setFollowingArtists(results.data.artists.items.sort(function(a, b) {
            return b.popularity - a.popularity;
          })));
        } else {
          dispatch(setFollowingArtists([]));
        }
      });
  };
};
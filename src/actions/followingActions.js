import * as types from './actionTypes';
import {getFollowingArtists} from '../services/spotifyService';

export const setFollowingArtists = (followingArtists)=>{
  return {type: types.SET_FOLLOWING_ARTISTS, followingArtists};
};

export const getFollowingArtists = (token='')=>{
  return (dispatch)=>{
    return getFollowingArtists(token)
      .then((results)=>{
        dispatch(setFollowingArtists(results));
      });
  };
};
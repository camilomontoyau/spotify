import * as types from './actionTypes';
import {getCurrentTrack} from '../services/spotifyService';

export const setCurrentTrack = (currentTrack)=>{
  return {type: types.SET_CURRENT_TRACK, currentTrack};
};

export const getCurrentTrackAction = (token='')=>{
  return (dispatch)=>{
    return getCurrentTrack(token)
      .then((result)=>{
        if(result.data && result.data.item){
          dispatch(setCurrentTrack(result.data.item));
        }
        
      });
  };
};
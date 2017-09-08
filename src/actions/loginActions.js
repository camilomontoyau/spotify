import * as types from './actionTypes';
import {isLogged} from '../services/spotifyService';
export const setLogged = (logged = false)=>{
  return {type: types.SET_LOGGED, logged};
};

export const isLoggedAction = (token='') => {
  return (dispatch)=>{
    return isLogged(token)
    .then(()=>{
      dispatch(setLogged(true));
    })
    .catch(()=>{
      dispatch(setLogged(false));
    });
  };
};
import * as types from './actionTypes';
import {isLogged} from '../services/spotifyService';


export const setLogged = (logged = false)=>{
  return {type: types.SET_LOGGED, logged};
};

export const setMe = (me = null)=>{
  return {type: types.SET_ME, me};
};

export const isLoggedAction = (token='') => {
  return (dispatch)=>{
    return isLogged(token)
    .then((response)=>{
      console.log('response', response);
      dispatch(setLogged(true));
      dispatch(setMe(response.data));
    })
    .catch(()=>{
      dispatch(setLogged(false));
    });
  };
};
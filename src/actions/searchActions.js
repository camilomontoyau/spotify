import * as types from './actionTypes';
import {getSearchResults} from '../services/spotifyService';

export const setSearchMessage = (message)=>{
  return {type: types.SET_SEARCH_MESSAGE, message};
};

export const setSearchResults = (results)=>{
  return {type: types.SET_SEARCH_RESULTS, results};
};

export const getMessage = () => {
  return (dispatch)=>{
    dispatch(setSearchMessage('this message comes from the state'));
  };
};

export const getSearchResultsAction = (searchText='', token='')=>{
  return (dispatch)=>{
    return getSearchResults(searchText, token)
      .then((results)=>{
        if(results.data &&
          results.data.tracks &&
          results.data.tracks.items) {
          dispatch(setSearchResults(results.data.tracks.items));
        }
      });
  };
};
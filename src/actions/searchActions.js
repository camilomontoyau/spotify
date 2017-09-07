import * as types from './actionTypes';
export const setSearchMessage = (message)=>{
  return {type: types.SET_SEARCH_MESSAGE, message};
};

export const getMessage = () => {
  return (dispatch)=>{
    dispatch(setSearchMessage('this message comes from the state'));
  };
};
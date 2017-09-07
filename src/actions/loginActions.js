import * as types from './actionTypes';
export const setLoginMessage = (message)=>{
  return {type: types.SET_LOGIN_MESSAGE, message};
};

export const getMessage = () => {
  return (dispatch)=>{
    dispatch(setLoginMessage('this message comes from the state'));
  };
};
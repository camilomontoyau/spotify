import * as types from '../actions/actionTypes';

const loginReducer = (state = {}, action) => {
    switch(action.type) {
      case types.SET_LOGIN_MESSAGE:
      return  Object.assign({}, state, {
        message: action.message
      });
      default:
        return state;
    }
};

export default loginReducer;

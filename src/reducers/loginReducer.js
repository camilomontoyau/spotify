import * as types from '../actions/actionTypes';

const loginReducer = (state = {}, action) => {
    switch(action.type) {
      case types.SET_LOGGED:
      return  Object.assign({}, state, {
        logged: action.logged
      });
      case types.SET_ME:
      return  Object.assign({}, state, {
        me: action.me
      });
      default:
        return state;
    }
};

export default loginReducer;

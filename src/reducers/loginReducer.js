import * as types from '../actions/actionTypes';

const loginReducer = (state = {}, action) => {
    switch(action.type) {
      case types.SET_LOGGED:
      return  Object.assign({}, state, {
        logged: action.logged
      });
      default:
        return state;
    }
};

export default loginReducer;

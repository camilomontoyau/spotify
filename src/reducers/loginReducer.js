import * as types from '../actions/actionTypes';

const loginReducer = (state = {}, action) => {
    switch(action.type) {
      case types.LOAD_USER_DATA_SUCCESS:
      return  Object.assign({}, state, {
        userData: Object.assign({}, action.userData)
      });

      default:
        return state;
    }
};

export default loginReducer;

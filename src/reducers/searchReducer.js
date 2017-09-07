import * as types from '../actions/actionTypes';

const searchReducer = (state = {}, action) => {
    switch(action.type) {
      case types.SET_SEARCH_MESSAGE:
      return  Object.assign({}, state, {
        message: action.message
      });
      default:
        return state;
    }
};

export default searchReducer;

import * as types from '../actions/actionTypes';

const searchReducer = (state = {}, action) => {
    switch(action.type) {
      case types.SET_SEARCH_MESSAGE:
      return  Object.assign({}, state, {
        message: action.message
      });
      
      case types.SET_SEARCH_RESULTS:
      return  Object.assign({}, state, {
        results: Object.assign([], action.results)
      });
      default:
        return state;
    }
};

export default searchReducer;

import * as types from '../actions/actionTypes';

const searchReducer = (state = {}, action) => {
    switch(action.type) {
      case types.SET_CURRENT_TRACK:
      return  Object.assign({}, state, {
        currentTrack: Object.assign({}, action.currentTrack)
      });
      default:
        return state;
    }
};

export default searchReducer;

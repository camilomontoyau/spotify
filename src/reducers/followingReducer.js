import * as types from '../actions/actionTypes';

const followingReducer = (state = {}, action) => {
    switch(action.type) {
      case types.SET_FOLLOWING_ARTISTS:
      return  Object.assign({}, state, {
        followingArtists: Object.assign([], action.followingArtists)
      });
      default:
        return state;
    }
};

export default followingReducer;

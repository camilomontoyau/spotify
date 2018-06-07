import {combineReducers} from 'redux';
import login from './loginReducer';
import search from './searchReducer';
import current from './currentReducer';
import following from './followingReducer';

const rootReducer = combineReducers({
  login,
  search,
  current,
  following
});

export default rootReducer;
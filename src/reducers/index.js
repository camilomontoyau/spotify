import {combineReducers} from 'redux';
import login from './loginReducer';
import search from './searchReducer';
import current from './currentReducer';

const rootReducer = combineReducers({
  login,
  search,
  current
});

export default rootReducer;
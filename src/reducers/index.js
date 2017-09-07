import {combineReducers} from 'redux';
import login from './loginReducer';
import search from './searchReducer';

const rootReducer = combineReducers({
  login,
  search
});

export default rootReducer;
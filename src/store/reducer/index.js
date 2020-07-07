import {combineReducers} from 'redux';
import ErrorReducer from './ErrorReducer';
import MoviesReducer from './MoviesReducer';
const rootReducer = combineReducers({
  ErrorReducer,
  MoviesReducer
});
export default rootReducer;
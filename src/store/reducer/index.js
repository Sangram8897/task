import { combineReducers } from 'redux';
import ErrorReducer from './ErrorReducer';
import MoviesReducer from './MoviesReducer';
import NowPlayingReducer from './NowPlayingReducer';
import TopRatedReducer from './TopRatedReducer';
const rootReducer = combineReducers({
  ErrorReducer,
  MoviesReducer,
  TopRatedReducer,
  NowPlayingReducer
});
export default rootReducer;
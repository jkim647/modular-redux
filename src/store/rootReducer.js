import { combineReducers } from "redux";
import counterReducer from '../reducer/counterReducer'


const createReducer = asyncReducers =>
  combineReducers({
    counterReducer,
    // When reducers are provided to createReducer they'll be plopped on here
    ...asyncReducers
  });

export default createReducer;

import {combineReducers} from 'redux';

import deviceReducer from './deviceReducer';
import authReducer from './authReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  device: deviceReducer,
  auth: authReducer,
});
// Exports
export default rootReducer;

import {combineReducers} from 'redux';

import deviceReducer from './deviceReducer';
import auth0Reducer from './auth0Reducer';
import mainNavigationReducer from './mainNavigationReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  device: deviceReducer,
  auth: auth0Reducer,
  mainNavigation: mainNavigationReducer,
});
// Exports
export default rootReducer;

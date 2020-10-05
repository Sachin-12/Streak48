import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import {createMigrate} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// Imports: Redux
import rootReducer from '../reducers/rootReducer';

// Middleware: Redux Thunk (Async/Await)
const middleware = [thunk];

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  timeout: 30000,
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['authReducer'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
  version: 1,
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(...middleware));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {store, persistor};

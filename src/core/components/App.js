/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, Suspense, useEffect, useCallback} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {Dimensions, View, StyleSheet} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import DeviceInfo from 'react-native-device-info';
import {store, persistor} from '../redux/store/store';
import AuthenticationNavigation from './shared/navigation/authenticationNavigation';
import {deviceActions} from '../redux/actions/deviceActions';
import componentSizes, {
  componentSizesMaxDimension,
} from '../constants/Dimensions';
import deviceTypes from '../constants/DeviceTypes';
import Colors from '../constants/Colors';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense
          fallback={
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                backgroundColor: Colors.lightMode.login_background,
                flex: 1,
              }}
            />
          }>
          <AuthenticationNavigation />
        </Suspense>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;

/* eslint-disable no-undef */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import LoginPage from '../../pages/authentication/LoginPage';
import {PageNames} from '../../../constants/PageNames';
import {authenticationState} from '../../../redux/reducers/authReducer';
import MainNavigationHolder from './mainNavigationHolder/mainNavigationHolder';

const Stack = createStackNavigator();

const AuthenticationNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Main'}>
        {/* {props.auth.loggedInState !== authenticationState.log_in_success ? ( */}
        <Stack.Screen name={PageNames.Authentication} component={LoginPage} />
        {/* ) : (
          <>
            <Stack.Screen
              name={PageNames.Main}
              component={MainNavigationHolder}
              options={{headerShown: false}}
            />
          </>
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = ({auth}) => {
  return {
    auth,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthenticationNavigation);

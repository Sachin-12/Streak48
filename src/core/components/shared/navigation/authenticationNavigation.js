import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import LoginPage from '../../pages/authentication/login/LoginPage';
import {PageNames} from '../../../constants/PageNames';
import mainNavigationHolder from './mainNavigationHolder/mainNavigationHolder';

const Stack = createStackNavigator();

const AuthenticationNavigation = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Main'}>
        {/*{{props.auth.loggedInState !== authenticationState.log_in_success ? (}*/}
          <Stack.Screen
            name={PageNames.Authentication}
            component={LoginPage}
            options={{animationTypeForReplace: 'pop', headerShown: false}}
          />
        {/*) : ({
          <>
            <Stack.Screen
              name={PageNames.Main}
              component={mainNavigationHolder}
              options={{headerShown: false}}
            />
          </>
        )}*/}
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
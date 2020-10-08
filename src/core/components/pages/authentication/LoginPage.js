import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
GoogleSignin.configure({
  webClientId:
    '354222989462-sh9uod9dgnr603gdk9qohes9pbkfj8g3.apps.googleusercontent.com',
});
const Loginpage = (props) => {
  const [user, setUser] = useState();
  console.log(user);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      setUser(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('user cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signin in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play services not available or outdated');
      } else {
        console.log('something else has happened');
      }
    }
  };
  // const signOut = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     setUser(null); // Remember to remove the user from your app's state as well
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const signOut = async () => {
    const user = await auth().signOut();
    setUser(user);
    console.log('User Signed out');
  };

  return (
    <>
      <View>
        <Text>Sachin</Text>
        {user ? (
          <Text>{'LoggedIn'}</Text>
        ) : (
          <GoogleSigninButton
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => signIn().then((data) => console.log(data))}
            // disabled={isSigninInProgress}
          />
        )}
        <TouchableOpacity>
          <Text onPress={signOut}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Loginpage;

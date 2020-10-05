import {Alert} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

//Gets current time in seconds
export function getCurrentTime() {
  return new Date().getTime() / 1000;
}

export function showAlert(title, message) {
  Alert.alert(title, message);
}

// returns boolean true if its connected to network and internet
export async function isNetworkAvailable() {
  let netInfo = await NetInfo.fetch(); //resolve promise and assigns the value
  return netInfo.isConnected && netInfo.isInternetReachable;
}

export function isValidValue(value) {
  return value !== undefined && value !== null;
}

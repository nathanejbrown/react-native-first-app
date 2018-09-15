import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';

//Register Screens
Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen);

// Start an app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen',
    title: 'Login'
  }
})
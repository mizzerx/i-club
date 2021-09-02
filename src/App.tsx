/**
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import LoginScreen from './screens/AuthenticateScreens/LoginScreen';
import MainLoginScreen from './screens/AuthenticateScreens/MainLoginScreen';
import MainSignupScreen from './screens/AuthenticateScreens/MainSignupScreen';
import HomeScreen from './screens/HomeScreens';
import SplashScreen from './screens/SplashScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<'Splash' | 'MainScreen'>(
    'Splash',
  );

  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen('MainScreen');
    }, 3000);
  }, []);

  return currentScreen === 'Splash' ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'Login'}>
        <Stack.Screen name={'Login'} component={LoginScreen} />
        <Stack.Screen name={'MainLogin'} component={MainLoginScreen} />
        <Stack.Screen name={'MainSignup'} component={MainSignupScreen} />
        <Stack.Screen name={'Home'} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

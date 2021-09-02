import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  MainLogin: undefined;
  MainSignup: undefined;
  Home: undefined;
};

// LOGIN
export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
// LOGIN

// MAIN LOGIN
export type MainLoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MainLogin'
>;

export type MainLoginScreenRouteProp = RouteProp<
  RootStackParamList,
  'MainLogin'
>;
// MAIN LOGIN

// MAIN SIGNUP
export type MainSignupScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MainSignup'
>;

export type MainSignupScreenRouteProp = RouteProp<
  RootStackParamList,
  'MainSignup'
>;
// MAIN SIGNUP

// START BOTTOM TAB
export type TabParamList = {
  Overview: undefined;
  Setting: undefined;
  Community: undefined;
  WorkSpace: undefined;
  Club: undefined;
};
// END BOTTOM TAB

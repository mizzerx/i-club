/**
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppColors from '../../commons/AppColors';
import AppDimensions from '../../commons/AppDimensions';
import AppButton from '../../components/AppButton';
import AppText from '../../components/AppText';
import { LoginScreenNavigationProp } from '../../types';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = props => {
  const {} = props;
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const _handleOnPressLogin = () => {
    navigation.navigate('MainLogin');
  };

  const _handleOnPressSignup = () => {
    navigation.navigate('MainSignup');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/app-logo.png')}
        style={styles.logo}
      />
      <AppText style={styles.title}>{'Welcome to iClub Application'}</AppText>
      <View style={styles.buttonContainer}>
        <AppButton style={styles.buttonLogin} onPress={_handleOnPressLogin}>
          <AppText style={styles.txtLogin}>{'Login'.toUpperCase()}</AppText>
        </AppButton>
        <View style={styles.separateLine}>
          <View style={styles.line} />
          <AppText style={styles.txtLine}>{'Or'.toUpperCase()}</AppText>
          <View style={styles.line} />
        </View>
        <AppButton style={styles.buttonSignup} onPress={_handleOnPressSignup}>
          <AppText style={styles.txtSignup}>{'Signup'.toUpperCase()}</AppText>
        </AppButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 175,
    height: 175,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 50,
  },
  buttonLogin: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: AppDimensions.stdBtnWidth,
    backgroundColor: AppColors.blackColor,
    borderRadius: 10,
  },
  buttonSignup: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  txtLogin: {
    color: AppColors.whiteColor,
    fontWeight: 'bold',
  },
  txtSignup: {
    fontWeight: 'bold',
  },
  separateLine: {
    flexDirection: 'row',
    width: AppDimensions.stdBtnWidth,
    alignItems: 'center',
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: AppColors.blackColor,
  },
  txtLine: {
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
});

export default LoginScreen;

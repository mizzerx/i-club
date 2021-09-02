/**
 * @format
 */

import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { View } from 'react-native';
import AppText from '../../components/AppText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppButton from '../../components/AppButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MainLoginScreenNavigationProp } from '../../types';
import AppInput from '../../components/AppInput';
import AppDimensions from '../../commons/AppDimensions';
import AppColors from '../../commons/AppColors';

interface MainLoginScreenProps {}

const MainLoginScreen: React.FC<MainLoginScreenProps> = props => {
  const {} = props;
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<MainLoginScreenNavigationProp>();

  const _handleOnPressBack = () => {
    navigation.goBack();
  };

  const _handleOnPressLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <AppButton
        style={[styles.btnBack, { marginTop: insets.top }]}
        onPress={_handleOnPressBack}>
        <AntDesign name={'left'} size={24} />
        <AppText style={styles.txtBack}>{'Go back'}</AppText>
      </AppButton>
      <Image
        source={require('../../assets/app-logo.png')}
        style={styles.logo}
      />
      <AppText style={styles.title}>
        {'Now you need to fill\nyour username / password'}
      </AppText>
      <View style={styles.txtInputContainer}>
        <AppInput
          placeholder={'Username'}
          containerStyle={styles.txtInputUsername}
        />
        <AppInput placeholder={'Password'} secureTextEntry />
        <AppButton>
          <AppText style={styles.txtForgotPwd}>
            {'Forgot your password?'}
          </AppText>
        </AppButton>
      </View>
      <AppButton style={styles.btnLogin} onPress={_handleOnPressLogin}>
        <AppText style={styles.txtLogin}>{'Login'.toUpperCase()}</AppText>
      </AppButton>
      <View style={styles.txtSignupMsg}>
        <AppText>{"Don't have an account? "}</AppText>
        <AppButton>
          <AppText style={styles.txtSignup}>{'Signup'}</AppText>
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
  btnBack: {
    position: 'absolute',
    top: 10,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
  },
  txtInputContainer: {
    marginTop: 45,
  },
  btnLogin: {
    marginTop: 50,
    width: AppDimensions.stdBtnWidth,
    padding: 10,
    backgroundColor: AppColors.blackColor,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  txtInputUsername: {
    marginBottom: 15,
  },
  txtBack: {
    marginLeft: 5,
    fontSize: 13,
  },
  txtForgotPwd: {
    fontSize: 11,
    marginTop: 5,
    textAlign: 'right',
  },
  txtLogin: {
    color: AppColors.whiteColor,
    fontWeight: 'bold',
  },
  txtSignupMsg: {
    flexDirection: 'row',
  },
  txtSignup: {
    fontWeight: '600',
  },
});

export default MainLoginScreen;

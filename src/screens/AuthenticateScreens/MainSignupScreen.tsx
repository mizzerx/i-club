/**
 * @format
 */

import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppButton from '../../components/AppButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppText from '../../components/AppText';
import AppInput from '../../components/AppInput';

interface MainSignupScreenProps {}

const MainSignupScreen: React.FC<MainSignupScreenProps> = props => {
  const {} = props;
  const insets = useSafeAreaInsets();

  const _handleOnPressBack = () => {};

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
        {'Now you need to fill\nyour infomation to register new account'}
      </AppText>
      <ScrollView style={styles.txtInputContainer}>
        <AppInput
          placeholder={'Your full name'}
          containerStyle={[styles.txtInput]}
        />
        <AppInput
          placeholder={'Enter your age'}
          keyboardType={'number-pad'}
          containerStyle={[styles.txtInput]}
        />
        <AppInput
          placeholder={'Enter your major'}
          containerStyle={[styles.txtInput]}
        />
        <AppInput
          placeholder={'Enter your email address'}
          keyboardType={'email-address'}
          containerStyle={[styles.txtInput]}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBack: {
    position: 'absolute',
    top: 10,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtBack: {
    marginLeft: 5,
    fontSize: 13,
  },
  logo: {
    width: 175,
    height: 175,
    marginTop: 100,
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
  },
  txtInputContainer: {
    marginTop: 45,
  },
  txtInput: {
    marginVertical: 10,
  },
});

export default MainSignupScreen;

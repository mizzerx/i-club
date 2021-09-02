/**
 * @format
 */

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface SplashScreenProps {}

const SplashScreen: React.FC<SplashScreenProps> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Image source={require('../assets/app-logo.png')} style={styles.logo} />
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
    width: 150,
    height: 150,
  },
});

export default SplashScreen;

/**
 * @format
 */

import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import AppDimensions from '../commons/AppDimensions';

interface AppInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const AppInput: React.FC<AppInputProps> = props => {
  const { containerStyle, children } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      {children}
      <TextInput style={styles.txtInput} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    width: AppDimensions.stdBtnWidth,
    padding: 10,
  },
  txtInput: {
    flex: 1,
  },
});

export default AppInput;

/**
 * @format
 */

import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface AppButtonProps extends TouchableOpacityProps {}

const AppButton: React.FC<AppButtonProps> = props => {
  const { children } = props;

  return (
    <TouchableOpacity activeOpacity={0.75} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default AppButton;

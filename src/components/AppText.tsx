/**
 * @format
 */

import React from 'react';
import { Text, TextProps } from 'react-native';

interface AppTextProps extends TextProps {}

const AppText: React.FC<AppTextProps> = props => {
  const { children } = props;

  return <Text {...props}>{children}</Text>;
};

export default AppText;

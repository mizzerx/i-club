/**
 * @format
 */

import {
  BottomTabNavigationOptions,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {} from 'react-native';
import { TabParamList } from '../../types';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AppColors from '../../commons/AppColors';
import OverviewTab from './OverviewTab';
import SettingTab from './SettingTab';
import CommunityTab from './CommunityTab';
import WorkSpaceTab from './WorkSpaceTab';
import ClubTab from './ClubTab';

interface HomeScreenProps {}

const Tab = createBottomTabNavigator<TabParamList>();

const HomeScreen: React.FC<HomeScreenProps> = props => {
  const {} = props;

  const screenOptions = ({
    route,
  }: BottomTabScreenProps<TabParamList>): BottomTabNavigationOptions => ({
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
      const iconSize = focused ? size + 5 : size;
      if (route.name === 'Overview') {
        const iconName = focused ? 'view-dashboard' : 'view-dashboard-outline';
        return <MaterialIcon name={iconName} size={iconSize} color={color} />;
      }

      if (route.name === 'Setting') {
        const iconName = focused ? 'ios-settings' : 'ios-settings-outline';
        return <IonIcon name={iconName} size={iconSize} color={color} />;
      }

      if (route.name === 'Community') {
        const iconName = focused ? 'ios-planet' : 'ios-planet-outline';
        return <IonIcon name={iconName} size={iconSize} color={color} />;
      }

      if (route.name === 'WorkSpace') {
        const iconName = focused
          ? 'ios-code-working'
          : 'ios-code-working-outline';
        return <IonIcon name={iconName} size={iconSize} color={color} />;
      }

      if (route.name === 'Club') {
        const iconName = focused ? 'account-group' : 'account-group-outline';
        return <MaterialIcon name={iconName} size={iconSize} color={color} />;
      }
    },
    tabBarActiveTintColor: AppColors.blackColor,
    tabBarInactiveTintColor: AppColors.greyColor,
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name={'Overview'} component={OverviewTab} />
      <Tab.Screen name={'Club'} component={ClubTab} />
      <Tab.Screen name={'WorkSpace'} component={WorkSpaceTab} />
      <Tab.Screen name={'Community'} component={CommunityTab} />
      <Tab.Screen name={'Setting'} component={SettingTab} />
    </Tab.Navigator>
  );
};

export default HomeScreen;

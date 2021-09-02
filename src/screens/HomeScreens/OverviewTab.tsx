/**
 * @format
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import AppColors from '../../commons/AppColors';
import AppText from '../../components/AppText';

interface OverviewTabProps {}

const OverviewTab: React.FC<OverviewTabProps> = props => {
  const {} = props;
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={[styles.header, { marginTop: insets.top }]}>
        <View style={styles.avatar}>
          <Material name={'account-outline'} size={50} />
        </View>
        <View style={styles.txtHeaderContainer}>
          <AppText style={styles.txtHeader}>{'Wellcome, ADMIN'}</AppText>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <AppText style={styles.txtInfo}>
          {'Active grades: '}
          <AppText style={styles.txtValue}>{'100'}</AppText>
        </AppText>
        <AppText style={styles.txtInfo}>
          {'Current clubs: '}
          <AppText style={styles.txtValue}>{'1'}</AppText>
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: AppColors.whiteColor,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    borderWidth: 1,
    width: 75,
    height: 75,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtHeaderContainer: {
    marginLeft: 20,
  },
  txtHeader: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    borderWidth: 0.75,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  txtInfo: {
    fontWeight: '300',
  },
  txtValue: {
    fontWeight: 'bold',
  },
});

export default OverviewTab;

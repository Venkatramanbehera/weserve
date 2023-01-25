import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {OrganizationProps as Iprops} from '../container/organizationContainer';
import Service from '../../../../components/common/ServiceCard/Service';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {widthScale} from '../../../../utils/responsive.utils';
import {colors} from '../../../../assets/colors/colors';
interface OrganizationProps extends Iprops {
  navigation: NavigationProp<ParamListBase>;
}
const Organization = (props: OrganizationProps) => {
  const {allOrganization, navigation} = props;
  return (
    <View style={styles.container}>
      <Service data={allOrganization} navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: widthScale(12),
    flex: 1,
    backgroundColor: colors.container,
  },
});

export default Organization;

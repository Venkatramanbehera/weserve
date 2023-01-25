import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {IndividualProps} from '../container/indivisualContainer';
import Service from '../../../../components/common/ServiceCard/Service';
import style from '../../../../../storybook/stories/CenterView/style';
import {widthScale} from '../../../../utils/responsive.utils';
import {colors} from '../../../../assets/colors/colors';
// import { styles } from '../../Splash/components/Splash.style';
const Individual = (props: IndividualProps) => {
  const {allIndividual, navigation} = props;
  return (
    <View style={styles.container}>
      <Service data={allIndividual} navigation={navigation} />
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

export default Individual;

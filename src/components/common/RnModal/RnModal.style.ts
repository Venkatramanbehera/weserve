import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors/colors';
import {heightScale, widthScale} from '../../../utils/responsive.utils';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: widthScale(12),
    paddingTop: heightScale(56),
    paddingBottom: heightScale(12),
    margin: 0,
    backgroundColor: colors.container,
  },
});

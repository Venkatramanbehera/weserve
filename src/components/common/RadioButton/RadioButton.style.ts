import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors/colors';
import {fonts} from '../../../assets/constants/index.constants';
import {
  fontScale,
  heightScale,
  widthScale,
} from '../../../utils/responsive.utils';

export const styles = StyleSheet.create({
  root: {flex: 1, marginVertical: heightScale(12)},
  labelTextStyle: {
    fontSize: fontScale(14),
    color: colors.primaryText,
    letterSpacing: widthScale(0.02),
    fontFamily: fonts[600],
    marginBottom: heightScale(12),
  },
});

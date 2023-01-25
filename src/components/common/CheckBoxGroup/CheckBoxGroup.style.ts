import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors/colors';
import {fonts} from '../../../assets/constants/index.constants';
import {fontScale, widthScale} from '../../../utils/responsive.utils';

export const styles = StyleSheet.create({
  root: {flex: 1, paddingHorizontal: widthScale(18)},
  iconStyle: {borderColor: colors.primary},
  innerIconStyle: {borderWidth: 2},
  textStyle: {
    fontFamily: fonts[600],
    textDecorationLine: 'none',
    color: colors.primaryText,
  },
  addOtherText: {
    fontSize: fontScale(18),
    paddingTop: widthScale(18),
    fontFamily: fonts[700],
    color: colors.primaryText,
  },
});

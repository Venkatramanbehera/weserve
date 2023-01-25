import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors/colors';
import {fonts} from '../../../assets/constants/index.constants';
import {
  fontScale,
  heightScale,
  widthScale,
} from '../../../utils/responsive.utils';

export const styles = StyleSheet.create({
  root: {
    marginVertical: widthScale(12),
  },
  labelTextContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  textWithIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: widthScale(16),
    borderRadius: heightScale(6),
    marginTop: heightScale(14),
    backgroundColor: colors.white,
  },
  errorBorder: {
    color: 'red',
  },
  input: {
    flex: 1,
    marginLeft: widthScale(8),
    fontSize: fontScale(12),
    color: colors.primaryText,
    fontFamily: fonts[600],
    paddingVertical: heightScale(20),
  },
  labelTextStyle: {
    fontSize: fontScale(14),
    color: colors.primaryText,
    letterSpacing: widthScale(0.02),
    fontFamily: fonts[600],
  },
  imageStyle: {
    height: widthScale(20),
    width: widthScale(20),
  },
  errorMessage: {
    marginTop: 15,
    color: '#D88A1B',
  },
});

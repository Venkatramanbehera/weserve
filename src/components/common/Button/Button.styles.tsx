import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors/colors';
import {fonts} from '../../../assets/constants/index.constants';
import {
  fontScale,
  heightScale,
  widthScale,
} from '../../../utils/responsive.utils';

export const styles = StyleSheet.create({
  disabledOtpBtn: {
    marginTop: widthScale(18),
    backgroundColor: colors.primaryDisable,
    borderRadius: widthScale(6),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: heightScale(54),
    width: '100%',
  },
  otpBtn: {
    marginTop: widthScale(18),
    backgroundColor: colors.primary,
    borderRadius: widthScale(6),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: heightScale(54),
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: fontScale(14),
    fontFamily: fonts[600],
  },
  ClearbuttonText: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: fontScale(14),
    fontFamily: fonts[600],
  },
  ClearbuttonTextDisavle: {
    textAlign: 'center',
    color: colors.primaryDisable,
    fontSize: fontScale(14),
    fontFamily: fonts[600],
  },
  clearDiable: {
    backgroundColor: '#00000000',
  },
});

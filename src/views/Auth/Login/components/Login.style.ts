import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/colors/colors';
import {fonts} from '../../../../assets/constants/index.constants';
import {
  fontScale,
  heightScale,
  widthScale,
} from '../../../../utils/responsive.utils';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.container,
    paddingHorizontal: widthScale(16),
  },
  weservecontainer: {
    width: '100%',
  },
  weserve: {
    flexDirection: 'row',
  },
  weservewe: {
    fontFamily: fonts[700],
    fontSize: fontScale(45),
    color: colors.primaryText,
  },
  weserveServ: {
    fontFamily: fonts[700],
    fontSize: fontScale(45),
    color: colors.primary,
  },
  loginText: {
    fontFamily: fonts[700],
    fontSize: fontScale(26),
    color: colors.primaryText,
    marginTop: heightScale(66),
    marginBottom: heightScale(33),
  },
  buttonContainer: {
    paddingHorizontal: '10%',
  },
  scrollContStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  errorContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: widthScale(12),
  },
  errorText: {
    fontFamily: fonts[700],
    fontSize: fontScale(14),
    color: 'red',
  },
});

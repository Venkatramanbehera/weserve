import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/colors/colors';
import {fonts} from '../../../../assets/constants/index.constants';
import {fontScale} from '../../../../utils/responsive.utils';

export const styles = StyleSheet.create({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    flex: 1,
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
});

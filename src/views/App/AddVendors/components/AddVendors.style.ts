import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/colors/colors';
import {fonts} from '../../../../assets/constants/index.constants';
import {
  fontScale,
  heightScale,
  width,
  widthScale,
} from '../../../../utils/responsive.utils';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: widthScale(16),
    paddingTop: heightScale(24),
    backgroundColor: colors.container,
  },
  scrollContStyle: {},
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: width - widthScale(36),
    justifyContent: 'flex-end',
  },
  buttonContainerStep2: {
    display: 'flex',
    flexDirection: 'row',
    // width: width - widthScale(36),
    justifyContent: 'center',
  },
  serviceCard: {borderWidth: 1, backgroundColor: 'yellow'},
  weserve: {
    flexDirection: 'row',
  },
  weservewe: {
    fontFamily: fonts[700],
    fontSize: fontScale(18),
    color: colors.primaryText,
  },
  weserveServ: {
    fontFamily: fonts[700],
    fontSize: fontScale(18),
    color: colors.primary,
  },
  success: {
    fontFamily: fonts[700],
    fontSize: fontScale(18),
    color: 'green',
  },
  danger: {
    fontFamily: fonts[700],
    fontSize: fontScale(18),
    color: 'red',
  },
  comfortText: {
    fontFamily: fonts[400],
    fontSize: fontScale(16),
    color: colors.primaryText,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginVertical: 7,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
  },
  txtName: {
    fontSize: fontScale(16),
    fontFamily: fonts[700],
    color: colors.primaryText,
    textTransform: 'capitalize',
    width: '75%',
  },
  phonenum: {
    fontSize: fontScale(12),
    paddingVertical: 2,
    fontFamily: fonts[600],
    paddingHorizontal: widthScale(12),
  },
  num: {
    paddingVertical: 8,
  },
  calldir: {
    display: 'flex',
    flexDirection: 'row',
  },
  phoneicon: {
    height: widthScale(24),
    width: widthScale(24),
  },
  mt2: {
    marginTop: heightScale(12),
    marginBottom: heightScale(8),
  },
  modalheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors/colors';
import {fonts} from '../../../assets/constants/index.constants';
import {fontScale, widthScale} from '../../../utils/responsive.utils';

export const styles = StyleSheet.create({
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
  rating: {
    fontFamily: 'OpenSans-bold',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#3D3D3D',
    paddingHorizontal: 7,
    paddingVertical: 2,
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
  txtServices: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#D88A1B',
    paddingTop: 4,
  },
  srvItems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingRight: 70,
  },
  imgstar: {
    resizeMode: 'cover',
    height: 19,
    width: 19,
  },
  rate_one: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  calldir: {
    display: 'flex',
    flexDirection: 'row',
  },
  phoneicon: {
    height: widthScale(24),
    width: widthScale(24),
  },
  items: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#B5B5B5',
  },
  itemContent: {
    padding: 5,
  },
  nextbtnimg: {
    height: 22,
    width: 22,
  },
  arrow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    padding: 20,
  },
  txtedit: {
    color: 'green',
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: '#F8F8F8',
    right: 0,
  },
  backTextWhite: {
    color: 'red',
  },
  backIconground: {
    backgroundColor: 'white',
    height: 60,
    width: 60,
    borderRadius: 40,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 3,
    shadowRadius: 3,
  },
});

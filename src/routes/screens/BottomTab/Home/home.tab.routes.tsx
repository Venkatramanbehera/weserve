import React, {useCallback, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Hello_Icon, Location_Icon} from '../../../../assets/images';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Individual, Organization} from '../../../../views/App';
import {HomeProps as Iprops} from './container/homeContainer';
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
} from '@react-navigation/native';
import {fonts} from '../../../../assets/constants/index.constants';
import {
  fontScale,
  height,
  heightScale,
  width,
  widthScale,
} from '../../../../utils/responsive.utils';
import {colors} from '../../../../assets/colors/colors';
interface HomeProps extends Iprops {
  navigation: NavigationProp<ParamListBase>;
}
const HomeTab = (props: HomeProps) => {
  const {
    navigation,
    getAllOrganization,
    getAllIndividual,
    loading,
    userDetails,
  } = props;
  // useEffect(() => {
  //   getAllOrganization();
  //   getAllIndividual();
  // }, []);
  // useFocusEffect(() => {
  //   useCallback(() => {}, [getAllOrganization(), getAllIndividual()]);
  // });
  useFocusEffect(
    useCallback(() => {
      getAllOrganization();
      getAllIndividual();
    }, [getAllOrganization, getAllIndividual]),
  );
  useEffect(() => {
    if (!(userDetails && userDetails.access_token)) {
      navigation.navigate('Splash');
    }
  }, [userDetails, navigation]);

  const Tab = createMaterialTopTabNavigator();
  return (
    <>
      <View
        style={{
          paddingHorizontal: widthScale(18),
          backgroundColor: colors.white,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: heightScale(24),
          }}>
          <Text
            style={{
              fontFamily: fonts[400],
              fontSize: fontScale(16),
              color: colors.primaryText,
              marginRight: widthScale(6),
            }}>
            Hello
          </Text>
          <Image source={Hello_Icon} />
        </View>
        <Text
          style={{
            fontFamily: fonts[700],
            fontSize: fontScale(30),
            color: colors.primaryText,
            marginRight: widthScale(6),
          }}>
          Welcome Back
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: heightScale(6),
            marginBottom: widthScale(9),
          }}>
          <Image source={Location_Icon} />
          <Text
            style={{
              fontFamily: fonts[600],
              fontSize: fontScale(16),
              color: colors.primary,
              marginLeft: widthScale(6),
            }}>
            UAE
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
        }}>
        <Tab.Navigator
          screenOptions={{
            swipeEnabled: true,
            tabBarLabelStyle: styles.screenOptionTabBarStyle,
            tabBarItemStyle: styles.tabBarItemStyle,
            tabBarStyle: styles.tabBarStyle,
            tabBarActiveTintColor: colors.black,
            tabBarInactiveTintColor: colors.black + '50',
            tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
          }}>
          <Tab.Screen name="Organisation" component={Organization} />
          <Tab.Screen name="Individual" component={Individual} />
        </Tab.Navigator>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  tabBarItemStyle: {width: 'auto'},
  tabBarStyle: {
    backgroundColor: colors.white,
    elevation: 0,
    marginLeft: widthScale(18),
  },
  tabBarIndicatorStyle: {backgroundColor: colors.black},
  screenOptionTabBarStyle: {
    fontSize: fontScale(14),
    fontFamily: fonts[600],
    textTransform: 'capitalize',
  },
  registerdMobileModel: {margin: widthScale(50), height: height},
  registerdMobileViewModel: {
    backgroundColor: colors.white,
    width: width - widthScale(100),
    borderRadius: widthScale(8),
    padding: widthScale(16),
  },
});
export default HomeTab;

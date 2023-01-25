import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AddVendor, Profile} from '../../../views/App';
import {HomeComponent as HomeTab} from './Home/container/homeContainer';
import CustomTabBar from './CustomTabBar';
import {Image, StyleSheet, View} from 'react-native';
import {widthScale} from '../../../utils/responsive.utils';
import {colors} from '../../../assets/colors/colors';
import {addTab, homeTab, profileTab} from '../../../assets/images';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      backBehavior="firstRoute"
      initialRouteName="HomeTab;
"
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabContaiber}>
                <Image
                  testID="menuOption"
                  resizeMode={'contain'}
                  source={homeTab}
                  style={[
                    styles.tabIcon,
                    focused
                      ? {tintColor: colors.primary}
                      : {
                          tintColor: colors.black + '50',
                        },
                  ]}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddVendor}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabContaiber}>
                <Image
                  testID="menuOption"
                  resizeMode={'contain'}
                  source={addTab}
                  style={[
                    styles.tabIcon,
                    focused
                      ? {tintColor: colors.primary}
                      : {
                          tintColor: colors.black + '50',
                        },
                  ]}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabContaiber}>
                <Image
                  testID="menuOption"
                  resizeMode={'contain'}
                  source={profileTab}
                  style={[
                    styles.tabIcon,
                    focused
                      ? {tintColor: colors.primary}
                      : {
                          tintColor: colors.black + '50',
                        },
                  ]}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabContaiber: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  tabIcon: {
    height: widthScale(24),
    width: widthScale(24),
  },
});
export default BottomTabNavigator;

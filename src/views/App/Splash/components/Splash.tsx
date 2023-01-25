import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {styles} from './Splash.style';
import {
  useFocusEffect,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import {store} from '../../../../redux/redux-store';
import {colors} from '../../../../assets/colors/colors';
interface SplashScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const getData = async (
  setIsGoIn: any,
  navigation: NavigationProp<ParamListBase>,
) => {
  try {
    const access_token = store.getState().login.userDetails.access_token;
    if (access_token) {
      setIsGoIn(true);
    } else {
      navigation.navigate('Login');
    }
  } catch (e) {
    // error reading value
  }
};

const Splash = (props: SplashScreenProps) => {
  const {navigation} = props;
  const [isGoIn, setIsGoIn] = React.useState(false);
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        getData(setIsGoIn, navigation);
      }, 2000);
    }, [navigation]),
  );
  React.useEffect(() => {
    if (isGoIn) {
      navigation.navigate('BTN');
    }
  }, [isGoIn, navigation]);
  return (
    <View style={styles.root}>
      <View style={styles.weserve}>
        <Text style={styles.weservewe}>WE</Text>
        <Text style={styles.weserveServ}>SERVE</Text>
      </View>
    </View>
  );
};

export default Splash;

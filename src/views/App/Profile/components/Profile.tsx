import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../../../../components/common/Button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {Dispatch} from '@reduxjs/toolkit';
import {reset} from '../../../Auth/Login/services/loginSlice';
import {fonts} from '../../../../assets/constants/index.constants';
import {fontScale, widthScale} from '../../../../utils/responsive.utils';
import {colors} from '../../../../assets/colors/colors';

const storeDataToNull = async (
  navigation: NavigationProp<ParamListBase>,
  dispatch: Dispatch,
) => {
  try {
    await AsyncStorage.setItem('WE_SERVE_USER_DATA', '');
    console.log('hela clear');
    dispatch(reset());
    navigation.navigate('Splash');
  } catch (e) {
    // saving error
  }
};

interface ProfileProps {
  navigation: NavigationProp<ParamListBase>;
}

const Profile = (props: ProfileProps) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: widthScale(18),
        paddingTop: widthScale(24),
      }}>
      <View style={styles.weserve}>
        <Text style={styles.weservewe}>Profile </Text>
        <Text style={styles.weserveServ}>Setting</Text>
      </View>
      <Button
        buttonText="Logout"
        onPress={() => {
          storeDataToNull(navigation, dispatch);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});
export default Profile;

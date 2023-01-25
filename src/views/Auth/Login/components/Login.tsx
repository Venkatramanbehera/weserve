import {View, Text} from 'react-native';
import React, {useState} from 'react';
import FormInput from '../../../../components/common/FormTextInput/FormInput';
import {Msg_Icon, Password_Icon} from '../../../../assets/images';
import Button from '../../../../components/common/Button/Button';
import {styles} from './Login.style';
import {LoginProps as Iprops} from '../container/loginContainer';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {LoginDTO} from '../services/types';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const isEmailPasswordEmpty = (props: LoginDTO): boolean => {
  if (props.email && props.password) {
    return true;
  } else {
    return false;
  }
};

interface LoginProps extends Iprops {
  navigation: NavigationProp<ParamListBase>;
}

const Login = (props: LoginProps) => {
  const {userLogin, isLogin, error, navigation, loading} = props;
  const [email, setEmail] = useState('admin@weserve.com');
  const [password, setPassword] = useState('Weserve@123');
  React.useEffect(() => {
    isLogin && navigation.navigate('BTN');
  }, [isLogin, navigation]);
  return (
    <View style={styles.root}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        extraScrollHeight={24}
        enableAutomaticScroll={true}
        contentContainerStyle={styles.scrollContStyle}>
        <View style={styles.weservecontainer}>
          <View style={styles.weserve}>
            <Text style={styles.weservewe}>WE</Text>
            <Text style={styles.weserveServ}>SERVE</Text>
          </View>
          <Text style={styles.loginText}>Log In!</Text>
          <FormInput
            formLabel="Email"
            isLeftInputIcon={true}
            placeholder={'Enter your email id'}
            leftInputIcon={Msg_Icon}
            isError={false}
            errorMessage={'Invalid email'}
            textValue={email}
            onchange={(data: string) => {
              setEmail(data);
            }}
            type={'email'}
            isEditable={true}
            isValidationRequired={true}
          />
          <FormInput
            formLabel="Password"
            isLeftInputIcon={true}
            placeholder={'Password'}
            leftInputIcon={Password_Icon}
            isError={false}
            errorMessage={'Invalid password'}
            textValue={password}
            onchange={(data: string) => {
              setPassword(data);
            }}
            type={'password'}
            isViewPasswordIcon
            max={100}
            min={5}
            isValidationRequired={false}
          />
          <View style={styles.buttonContainer}>
            <Button
              isLoading={loading}
              buttonText="Log In"
              onPress={() => {
                console.log('email', email, 'Password', password);
                userLogin({email: email, password: password});
              }}
              disabled={!isEmailPasswordEmpty({email, password})}
            />
          </View>
          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;

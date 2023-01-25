import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import FormInput from '../../../../components/common/FormTextInput/FormInput';
import {Msg_Icon, Password_Icon} from '../../../../assets/images';
import Button from '../../../../components/common/Button/Button';

type User = {
  email: string;
  password: string;
};

const isEmailPasswordEmpty = (props: User): boolean => {
  if (props.email && props.password) {
    return true;
  } else {
    return false;
  }
};

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{flex: 1, padding: 10}}>
      <ScrollView>
        <Text>WeServe</Text>
        <Text>Log In!</Text>
        <FormInput
          formLabel="Email"
          isLeftInputIcon={true}
          placeholder={'Enter Your Email Id'}
          leftInputIcon={Msg_Icon}
          isError={false}
          errorMessage={'Email is invalid'}
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
          placeholder={'Enter Your Password'}
          leftInputIcon={Password_Icon}
          isError={false}
          errorMessage={'Email is invalid'}
          textValue={password}
          onchange={(data: string) => {
            setPassword(data);
          }}
          type={'password'}
          isViewPasswordIcon
          max={100}
          min={5}
          isValidationRequired
        />
        <Button
          buttonText="Log In"
          onPress={() => {
            console.log('email', email, 'Password', password);
          }}
          disabled={!isEmailPasswordEmpty({email, password})}
        />
      </ScrollView>
    </View>
  );
};

export default SignIn;

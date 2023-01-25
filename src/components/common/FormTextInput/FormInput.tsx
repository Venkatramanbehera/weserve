import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './formInput.style';
import {Eye_Icon, Eye_slash_Icon} from '../../../assets/images';
import {colors} from '../../../assets/colors/colors';

type inputType = 'text' | 'email' | 'password' | 'number';

export interface InputProps {
  formLabel: string;
  isLeftInputIcon?: boolean;
  leftInputIcon?: number;
  isRightInputIcon?: boolean;
  rightInputIcon?: number;
  placeholder: string;
  isError?: boolean;
  errorMessage: string;
  textValue: string;
  onchange: (data: string) => void;
  type: inputType;
  isViewPasswordIcon?: boolean;
  isEditable?: boolean;
  isValidationRequired: boolean;
  min?: number;
  max?: number;
  rootViewStyle?: {};
  labelTextContainer?: {};
  labelTextStyle?: {};
  textWithIconContainer?: {};
  leftInputIconStyle?: {};
  inputStyle?: {};
}

const FormInput = (props: InputProps) => {
  const {
    formLabel,
    isLeftInputIcon,
    leftInputIcon,
    placeholder,
    errorMessage,
    textValue,
    onchange,
    isViewPasswordIcon,
    type,
    isEditable,
    isValidationRequired,
    min = 3,
    max = 100,
    rootViewStyle,
    labelTextContainer,
    labelTextStyle,
    textWithIconContainer,
    leftInputIconStyle,
    inputStyle,
  } = props;
  const emailRe =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phonenoRe = /^(\+91[-\s]?)?0?(91)?[123456789]\d{9}$/;
  const passwordRe =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
  const [iconVisible, setIconVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(
    textValue ? textValue : '',
  );
  const [errorMsg, setErrorMsg] = useState<string>('');
  useEffect(() => {
    isViewPasswordIcon && setIconVisible(isViewPasswordIcon);
  }, [isViewPasswordIcon]);

  useEffect(() => {
    textValue ? setInputValue(textValue) : setInputValue('');
  }, [textValue, inputValue]);

  const handleOnBlur = (typeBlur: inputType, inputBlurValue: string) => {
    if (isValidationRequired) {
      switch (typeBlur) {
        case 'email':
          if (inputBlurValue && !emailRe.test(inputBlurValue.trim())) {
            setErrorMsg(errorMessage ? errorMessage : 'Invalid Email');
          } else {
            setErrorMsg('');
          }
          break;
        case 'number':
          if (inputBlurValue && !phonenoRe.test(inputBlurValue.trim())) {
            setErrorMsg(errorMessage ? errorMessage : 'Invalid Phone Number');
          } else {
            setErrorMsg('');
          }
          break;
        case 'password':
          if (
            inputBlurValue?.length === 0 ||
            inputBlurValue === '' ||
            inputBlurValue === null ||
            inputBlurValue === undefined
          ) {
            setErrorMsg('Can not Be Empty');
            return;
          }
          if (inputBlurValue?.length < min) {
            setErrorMsg('Length Cannot be Less Than 3');
            return;
          }
          if (inputBlurValue?.length > max) {
            setErrorMsg(`Length cannot be greater than ${max}`);
            return;
          }
          if (!passwordRe.test(inputBlurValue)) {
            setErrorMsg('Invalid password');
            return;
          } else {
            setErrorMsg('');
          }
          break;
        case 'text':
          // console.log(
          //   'typeBlur',
          //   typeBlur,
          //   'length',
          //   inputBlurValue.length,
          //   'Min ',
          //   min,
          // );
          if (!inputBlurValue) {
            setErrorMsg(errorMessage ? errorMessage : 'Invalid Text');
          }
          if (inputBlurValue.length < min) {
            console.log('first');
            setErrorMsg(`Input can not be less then ${min}`);
          }
          if (inputBlurValue.length > max) {
            setErrorMsg(`Input can not be less then ${max}`);
          }
          if (inputBlurValue.length > min && inputBlurValue.length < max) {
            setErrorMsg('');
          }
          break;
        default:
          setErrorMsg('');
      }
    }
  };

  return (
    <View style={[styles.root, rootViewStyle]}>
      <View style={[styles.labelTextContainer, labelTextContainer]}>
        {formLabel && (
          <Text style={[styles.labelTextStyle, labelTextStyle]}>
            {formLabel}
          </Text>
        )}
        <View style={[styles.textWithIconContainer, textWithIconContainer]}>
          {isLeftInputIcon && (
            <Image
              source={leftInputIcon}
              style={[styles.imageStyle, leftInputIconStyle]}
            />
          )}
          <TextInput
            style={[styles.input, inputStyle]}
            placeholder={placeholder}
            placeholderTextColor={colors.secondaryText}
            value={inputValue}
            onChangeText={(data: string) => {
              onchange(data);
              setInputValue(data);
            }}
            onBlur={() => {
              handleOnBlur(type, inputValue);
            }}
            editable={isEditable}
            keyboardType={
              type === 'email'
                ? 'email-address'
                : type === 'number'
                ? 'number-pad'
                : 'default'
            }
            secureTextEntry={type === 'password' && iconVisible}
          />
          {iconVisible && type === 'password' && (
            <TouchableOpacity
              onPress={() => {
                setIconVisible(false);
              }}>
              <Image source={Eye_Icon} style={[styles.imageStyle]} />
            </TouchableOpacity>
          )}
          {!iconVisible && type === 'password' && (
            <TouchableOpacity
              onPress={() => {
                setIconVisible(true);
              }}>
              <Image source={Eye_slash_Icon} style={[styles.imageStyle]} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {errorMsg.length > 0 && (
        <Text style={styles.errorMessage}> {errorMsg}</Text>
      )}
    </View>
  );
};

export default FormInput;

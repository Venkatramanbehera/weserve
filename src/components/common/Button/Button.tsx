import React from 'react';
import {ActivityIndicator, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './Button.styles';

export interface ButtonProps {
  disabled?: boolean;
  isLoading?: boolean;
  isClear?: boolean;
  testID?: string;
  onPress(): void;
  style?: {};
  textStyle?: any;
  buttonText: string;
  icon?: any;
}

const Button = ({
  disabled,
  testID,
  onPress,
  style,
  buttonText,
  textStyle,
  icon,
  isLoading = false,
  isClear = false,
}: ButtonProps) => {
  const loaderSize = textStyle?.fontSize
    ? textStyle.fontSize
    : styles.buttonText.fontSize;
  const loaderColor = textStyle?.color
    ? textStyle.color
    : styles.buttonText.color;
  return (
    <TouchableOpacity
      testID={testID}
      disabled={disabled || isLoading}
      onPress={onPress}
      style={
        disabled || isLoading
          ? [styles.disabledOtpBtn, isClear && styles.clearDiable, style]
          : [styles.otpBtn, isClear && styles.clearDiable, style]
      }>
      {icon && <Image source={icon} />}
      {isLoading ? (
        <ActivityIndicator color={loaderColor} size={loaderSize} />
      ) : (
        <Text
          style={
            disabled || isLoading
              ? [
                  styles.buttonText,
                  isClear && styles.ClearbuttonTextDisavle,
                  textStyle,
                ]
              : [
                  styles.buttonText,
                  isClear && styles.ClearbuttonText,
                  textStyle,
                ]
          }>
          {buttonText}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

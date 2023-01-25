import {View, Text} from 'react-native';
import React from 'react';
import RadioForm from 'react-native-simple-radio-button';
import {styles} from './RadioButton.style';
import {colors} from '../../../assets/colors/colors';
import {widthScale} from '../../../utils/responsive.utils';

type RadioData = {
  label: string;
  value: number;
};

type RadioButtonProps = {
  label: string;
  onPress(data: 2 | 1): void;
  data: RadioData[];
};

const RadioButton = (props: RadioButtonProps) => {
  const {label, onPress, data} = props;
  return (
    <View style={styles.root}>
      <Text style={styles.labelTextStyle}>{label}</Text>
      <RadioForm
        radio_props={data}
        initial={-1}
        onPress={dataReturn => {
          onPress(dataReturn);
        }}
        labelStyle={{marginRight: 20}}
        formHorizontal={true}
        buttonColor={colors.primaryDisable}
        selectedButtonColor={colors.primary}
        buttonSize={widthScale(12)}
        buttonOuterSize={widthScale(24)}
      />
    </View>
  );
};

export default RadioButton;

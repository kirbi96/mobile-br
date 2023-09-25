import React from 'react';
import {StyleSheet, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {AgEnum, Text} from './Text';
import {Colors} from '../../styles/Colors';

interface ICustomCheckBox {
  value: string;
  handleChange: (value: string, inputKey: string) => void;
  inputKey: string;
  disabled?: boolean;
  text?: string;
  top?: number;
}

export const CustomCheckBox = ({
  value,
  handleChange,
  inputKey,
  disabled,
  text,
  top = 16,
}: ICustomCheckBox) => {
  return (
    <View style={[styles.container, {marginTop: top}]}>
      <CheckBox
        tintColors={{
          true: disabled ? Colors.gray300 : Colors.blue,
          false: disabled ? Colors.gray300 : Colors.white,
        }}
        disabled={disabled}
        value={value === 'true'}
        onValueChange={v => handleChange(String(v), inputKey)}
      />
      {text && (
        <Text
          color={disabled ? Colors.gray300 : Colors.white}
          style={styles.text}
          Ag={AgEnum.Body}>
          {text}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 6,
  },
});

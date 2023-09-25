import React, {ReactNode, useRef} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../styles/Colors';
import {AgEnum, Text} from './Text';
import MaskInput from 'react-native-mask-input';
import {Mask} from 'react-native-mask-input/src/formatWithMask.types';

interface IInput {
  label: string;
  placeholder?: string;
  value?: string | undefined;
  renderRightAccessory?: any;
  editable?: boolean;
  style?: any;

  onChangeText?(value: string, inputKey: string): void;

  handlePressOnIcon?: () => void;
  icon?: ReactNode;
  keyboardType?: any;
  inputKey: string;
  error: any;
  disabled?: boolean;
  multiline?: boolean;
  maxLength?: number;
  marginTop?: number;
  iconPadding?: number;
  shadow?: boolean;
  secureTextEntry?: boolean;
  mask?: Mask;
}

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  editable = true,
  keyboardType,
  error,
  inputKey,
  handlePressOnIcon,
  icon,
  disabled = false,
  multiline = false,
  iconPadding,
  marginTop,
  shadow,
  secureTextEntry = false,
  mask,
  ...props
}: IInput) => {
  const input: any = useRef(null);

  const handleChange = (text: string) => {
    if (!onChangeText) {
      return;
    }
    onChangeText(text, inputKey);
  };

  return (
    <View style={{marginTop: marginTop || 16}}>
      {
        <View style={styles.labelContainer}>
          <Text Ag={AgEnum.Body} color={Colors.white}>
            {label}
          </Text>
        </View>
      }
      <View
        style={
          multiline
            ? [styles.inputContainer, {height: 137}]
            : [styles.inputContainer, shadow && styles.shadowInput]
        }
        pointerEvents={!editable ? 'none' : 'auto'}>
        {!mask ? (
          <TextInput
            ref={input}
            placeholder={placeholder}
            placeholderTextColor={Colors.gray300}
            autoCapitalize="none"
            keyboardType={keyboardType ?? 'default'}
            value={value}
            secureTextEntry={secureTextEntry}
            multiline={multiline}
            style={styles.inputStyle}
            onChangeText={handleChange}
            {...props}
          />
        ) : (
          <MaskInput
            ref={input}
            placeholder={placeholder}
            placeholderTextColor={Colors.gray300}
            autoCapitalize="none"
            keyboardType={keyboardType ?? 'default'}
            value={value}
            secureTextEntry={secureTextEntry}
            style={styles.inputStyle}
            onChangeText={formatted => handleChange(formatted)}
            mask={mask}
          />
        )}

        {icon ? (
          <TouchableOpacity
            style={{marginLeft: iconPadding || 0}}
            onPress={handlePressOnIcon}>
            {icon}
          </TouchableOpacity>
        ) : null}
      </View>
      {error ? (
        <Text Ag={AgEnum.Small} style={{color: Colors.danger, marginTop: 6}}>
          {error}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    borderRadius: 8,
    backgroundColor: Colors.gray700,
    borderColor: Colors.light_grey,
    borderWidth: 1,
  },
  shadowInput: {
    shadowOffset: {width: 0, height: 2},
    shadowColor: Colors.shadow,
    shadowRadius: 8,
    shadowOpacity: 1,
    elevation: 2,
  },
  inputStyle: {
    flex: 1,
    height: '100%',
    fontSize: 18,
    lineHeight: 22,
    paddingHorizontal: 12,
    fontFamily: 'Mipgost',
    color: Colors.white,
  },
  labelContainer: {
    marginBottom: 6,
  },
});

export default Input;

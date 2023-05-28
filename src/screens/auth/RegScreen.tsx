import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {containerStyle} from '../../styles/containerStyle';
import {AgEnum, Text} from '../../components/ui/Text';
import Input from '../../components/ui/Input';
import {Button} from '../../components/ui/Button';
import {Colors} from '../../styles/Colors';
import Navigation from '../../base/Navigation';
import {useForm} from 'react-hook-form';

enum ERegForm {
  EMAIL = 'email',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirmPassword',
}

export const RegScreen = () => {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const handleChange = (text: string, inputKey: any) => {
    setValue(inputKey, text, {shouldValidate: true});
  };

  const sendData = (data: any) => {
    console.log(123, data);
  };

  useEffect(() => {
    register(ERegForm.EMAIL);
    register(ERegForm.PASSWORD);
    register(ERegForm.CONFIRM_PASSWORD);
  }, []);

  return (
    <View style={containerStyle}>
      <View style={styles.container}>
        <Text align={'center'} Ag={AgEnum.H1}>
          Регистрация
        </Text>

        <Input
          label={'Почта'}
          value={watch(ERegForm.EMAIL)}
          onChangeText={handleChange}
          inputKey={ERegForm.EMAIL}
          error={''}
        />
        <Input
          label={'Пароль'}
          value={watch(ERegForm.PASSWORD)}
          onChangeText={handleChange}
          inputKey={ERegForm.PASSWORD}
          error={''}
        />
        <Input
          label={'Повторите пароль'}
          value={watch(ERegForm.CONFIRM_PASSWORD)}
          onChangeText={handleChange}
          inputKey={ERegForm.CONFIRM_PASSWORD}
          error={''}
        />

        <Button onPress={handleSubmit(sendData)} title={'Регистрация'} />

        <TouchableOpacity
          onPress={() => Navigation.pop()}
          style={{marginTop: 16}}>
          <Text color={Colors.blue} align={'center'} Ag={AgEnum.Body}>
            Есть аккаунт
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '30%',
  },
});

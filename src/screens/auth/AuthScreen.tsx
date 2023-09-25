import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {containerStyle} from '../../styles/containerStyle';
import {AgEnum, Text} from '../../components/ui/Text';
import Input from '../../components/ui/Input';
import {Button} from '../../components/ui/Button';
import {Colors} from '../../styles/Colors';
import Navigation from '../../base/Navigation';
import {Screens} from '../../navigation/Screens';
import {observer} from 'mobx-react';
import {useRootStore} from '../../base/hooks/useRootStore';
import {useForm} from 'react-hook-form';
import {IAuthRequest} from '../../modules/auth/AuthTypes';
import {FormValidation} from '../../validation/FormValidation';

enum EAuthForm {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export const AuthScreen = observer(() => {
  const {authStore} = useRootStore();

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm<IAuthRequest>({});

  const handleChange = (text: string, inputKey: any) => {
    setValue(inputKey, text, {shouldValidate: true});
  };

  const sendData = (data: IAuthRequest) => {
    authStore.login(data);
  };

  useEffect(() => {
    register(EAuthForm.EMAIL, FormValidation.email);
    register(EAuthForm.PASSWORD, FormValidation.password());
  }, []);

  return (
    <View style={containerStyle}>
      <View style={styles.container}>
        <Text align={'center'} Ag={AgEnum.H1}>
          Авторизация
        </Text>

        <Input
          label={'Почта'}
          value={watch(EAuthForm.EMAIL)}
          onChangeText={handleChange}
          inputKey={EAuthForm.EMAIL}
          error={errors[EAuthForm.EMAIL]?.message || ''}
        />
        <Input
          label={'Пароль'}
          secureTextEntry={true}
          value={watch(EAuthForm.PASSWORD)}
          onChangeText={handleChange}
          inputKey={EAuthForm.PASSWORD}
          error={errors[EAuthForm.PASSWORD]?.message || ''}
        />

        <Button onPress={handleSubmit(sendData)} title={'Войти'} />

        <TouchableOpacity
          onPress={() => Navigation.navigate(Screens.REGISTRATION)}
          style={{marginTop: 16}}>
          <Text color={Colors.blue} align={'center'} Ag={AgEnum.Body}>
            Регистрация
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: '30%',
  },
});

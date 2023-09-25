import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {containerStyle} from '../../styles/containerStyle';
import {AgEnum, Text} from '../../components/ui/Text';
import Input from '../../components/ui/Input';
import {Button} from '../../components/ui/Button';
import {Colors} from '../../styles/Colors';
import Navigation from '../../base/Navigation';
import {useForm} from 'react-hook-form';
import {FormValidation} from '../../validation/FormValidation';
import {observer} from 'mobx-react';
import {useRootStore} from '../../base/hooks/useRootStore';
import {IRegistrationRequest} from '../../modules/auth/AuthTypes';
import {maskPhoneFormat} from '../../validation/CustomMask';

enum ERegForm {
  EMAIL = 'email',
  NAME = 'name',
  PHONE = 'phone',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirmPassword',
}

export const RegScreen = observer(() => {
  const {authStore} = useRootStore();

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm<IRegistrationRequest>({});

  const handleChange = (text: string, inputKey: any) => {
    setValue(inputKey, text, {shouldValidate: true});
  };

  const sendData = (data: IRegistrationRequest) => {
    authStore.registration(data);
  };

  useEffect(() => {
    register(ERegForm.EMAIL, FormValidation.email);
    register(ERegForm.NAME, FormValidation.required);
    register(ERegForm.PHONE, FormValidation.phone());
    register(ERegForm.PASSWORD, FormValidation.password());
    register(ERegForm.CONFIRM_PASSWORD, FormValidation.passwordConfirm(watch));
  }, []);

  return (
    <View style={containerStyle}>
      <View style={styles.container}>
        <Text align={'center'} Ag={AgEnum.H1}>
          Регистрация
        </Text>

        <Input
          label={'Имя'}
          value={watch(ERegForm.NAME)}
          onChangeText={handleChange}
          inputKey={ERegForm.NAME}
          error={errors[ERegForm.NAME]?.message || ''}
        />

        <Input
          placeholder={'+7'}
          mask={maskPhoneFormat}
          label={'Телефон'}
          keyboardType={'numeric'}
          value={watch(ERegForm.PHONE)}
          onChangeText={handleChange}
          inputKey={ERegForm.PHONE}
          error={errors[ERegForm.PHONE]?.message || ''}
        />

        <Input
          label={'Почта'}
          value={watch(ERegForm.EMAIL)}
          onChangeText={handleChange}
          inputKey={ERegForm.EMAIL}
          error={errors[ERegForm.EMAIL]?.message || ''}
        />
        <Input
          label={'Пароль'}
          value={watch(ERegForm.PASSWORD)}
          onChangeText={handleChange}
          inputKey={ERegForm.PASSWORD}
          error={errors[ERegForm.PASSWORD]?.message || ''}
        />
        <Input
          label={'Повторите пароль'}
          value={watch(ERegForm.CONFIRM_PASSWORD)}
          onChangeText={handleChange}
          inputKey={ERegForm.CONFIRM_PASSWORD}
          error={errors[ERegForm.CONFIRM_PASSWORD]?.message || ''}
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
});

const styles = StyleSheet.create({
  container: {
    marginTop: '30%',
  },
});

import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {containerStyle} from '../../styles/containerStyle';
import {AgEnum, Text} from '../../components/ui/Text';
import Input from '../../components/ui/Input';
import {Button} from '../../components/ui/Button';
import {Colors} from '../../styles/Colors';
import Navigation from '../../base/Navigation';
import {Screens} from '../../navigation/Screens';

export const AuthScreen = () => {
  return (
    <View style={containerStyle}>
      <View style={styles.container}>
        <Text align={'center'} Ag={AgEnum.H1}>
          Авторизация
        </Text>

        <Input label={'Почта'} inputKey={'mail'} error={''} />
        <Input label={'Пароль'} inputKey={'mail'} error={''} />

        <Button title={'Войти'} />

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
};

const styles = StyleSheet.create({
  container: {
    marginTop: '30%',
  },
});

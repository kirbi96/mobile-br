import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {containerStyle} from '../../../styles/containerStyle';
import {AgEnum, Text} from '../../../components/ui/Text';
import {Header} from '../../../components/ui/Header';

export const InApplicationScreen = () => {
  return (
    <ScrollView>
      <Header />
      <View style={containerStyle}>
        <Text Ag={AgEnum.H1}>Сдается</Text>
        <Text style={{marginTop: 16}} Ag={AgEnum.H2}>
          Адресс:
        </Text>
        <Text Ag={AgEnum.Body}>
          г. Казань, улица Боевая, дом 21, квартира 69
        </Text>

        <Text style={{marginTop: 16}} Ag={AgEnum.H2}>
          Данные:
        </Text>
        <Text Ag={AgEnum.Body}>Комнат 3, Общая площадь 68 м², Этаж 5 из 9</Text>

        <Text style={{marginTop: 16}} Ag={AgEnum.H2}>
          Стоимость:
        </Text>
        <Text Ag={AgEnum.Body}>Цена: 22000 ₽</Text>
        <Text Ag={AgEnum.Body}>Залог: 2000 ₽</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {containerStyle} from '../../../styles/containerStyle';
import {AgEnum, Text} from '../../../components/ui/Text';
import {Header} from '../../../components/ui/Header';
import Input from '../../../components/ui/Input';
import {Button} from '../../../components/ui/Button';
import {Colors} from '../../../styles/Colors';
import {AlertModal} from '../../../components/ui/AlertModal';
import {useForm} from 'react-hook-form';
import {CustomCheckBox} from '../../../components/ui/CustomCheckBox';

export const AddInScreen = () => {
  const [showOwnerModal, setShowOwnerModal] = useState(false);

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
    register('address');
    register('floor');
    register('floor_home');
    register('rooms');
    register('area');
    register('balcony');
    register('conditioner');
    register('fridge');
    register('stove');
    register('microwave');
    register('washing');
    register('wifi');
    register('price');
    register('pledge');
  }, []);

  return (
    <>
      <Header />
      <ScrollView>
        <View style={containerStyle}>
          <Input
            label={'Адрес'}
            inputKey={'address'}
            error={''}
            value={watch('address')}
            onChangeText={handleChange}
          />

          <View style={{marginTop: 16}}>
            <Text Ag={AgEnum.Body}>Право собственности</Text>

            <View style={styles.ownerContainer}>
              <Button title={'Собственник'} size={'medium'} />
              <Button
                onPress={() => setShowOwnerModal(true)}
                style={styles.ownerBtn}
                title={'Посредник'}
                size={'medium'}
              />
            </View>
          </View>

          <Input
            label={'Этаж'}
            inputKey={'floor'}
            error={''}
            value={watch('floor')}
            onChangeText={handleChange}
            keyboardType={'numeric'}
            maxLength={2}
          />

          <Input
            label={'Этажей в доме'}
            inputKey={'floor_home'}
            error={''}
            value={watch('floor_home')}
            onChangeText={handleChange}
            keyboardType={'numeric'}
            maxLength={2}
          />

          <Input
            label={'Количество комнат'}
            inputKey={'rooms'}
            error={''}
            value={watch('rooms')}
            onChangeText={handleChange}
            keyboardType={'numeric'}
            maxLength={1}
          />

          <Input
            label={'Площадь квартиры'}
            inputKey={'area'}
            error={''}
            value={watch('area')}
            onChangeText={handleChange}
            keyboardType={'numeric'}
            maxLength={3}
          />

          <Text style={{marginTop: 16}} Ag={AgEnum.Body}>
            Техника
          </Text>

          <CustomCheckBox
            value={watch('balcony')}
            handleChange={handleChange}
            inputKey={'balcony'}
            text={'Балкон'}
          />

          <CustomCheckBox
            value={watch('conditioner')}
            handleChange={handleChange}
            inputKey={'conditioner'}
            text={'Кондиционер'}
          />

          <CustomCheckBox
            value={watch('fridge')}
            handleChange={handleChange}
            inputKey={'fridge'}
            text={'Холодильник'}
          />

          <CustomCheckBox
            value={watch('stove')}
            handleChange={handleChange}
            inputKey={'stove'}
            text={'Плита'}
          />

          <CustomCheckBox
            value={watch('microwave')}
            handleChange={handleChange}
            inputKey={'microwave'}
            text={'Микроволновка'}
          />

          <CustomCheckBox
            value={watch('washing')}
            handleChange={handleChange}
            inputKey={'washing'}
            text={'Стиральная машина'}
          />

          <CustomCheckBox
            value={watch('wifi')}
            handleChange={handleChange}
            inputKey={'wifi'}
            text={'Wi-Fi'}
          />

          <Input
            label={'Арендная плата, ₽'}
            inputKey={'price'}
            error={''}
            value={watch('price')}
            onChangeText={handleChange}
            keyboardType={'numeric'}
          />

          <Input
            label={'Залог, ₽'}
            inputKey={'pledge'}
            error={''}
            value={watch('pledge')}
            onChangeText={handleChange}
            keyboardType={'numeric'}
          />

          <Button onPress={handleSubmit(sendData)} title={'create'} />
        </View>
      </ScrollView>

      <AlertModal
        visible={showOwnerModal}
        closeModal={() => setShowOwnerModal(false)}
        text={
          'Приложение создано исключительно для собственников.\nРиэлторы будут заблокированны!!!'
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  ownerContainer: {
    marginTop: 3,
    flexDirection: 'row',
  },
  ownerBtn: {
    backgroundColor: Colors.gray700,
    marginLeft: 16,
  },
});

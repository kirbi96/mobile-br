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
    register('rooms');
    register('balcony');
  }, []);

  console.log(123123, watch('balcony'));

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
            label={'Количество комнат'}
            inputKey={'rooms'}
            error={''}
            value={watch('rooms')}
            onChangeText={handleChange}
            keyboardType={'numeric'}
            maxLength={1}
          />

          <CustomCheckBox
            value={watch('balcony')}
            handleChange={handleChange}
            inputKey={'balcony'}
            text={'Балкон'}
          />

          <CustomCheckBox
            value={watch('balcony')}
            handleChange={handleChange}
            inputKey={'balcony'}
            text={'Балкон'}
          />

          <CustomCheckBox
            value={watch('balcony')}
            handleChange={handleChange}
            inputKey={'balcony'}
            text={'Балкон'}
          />

          <CustomCheckBox
            value={watch('balcony')}
            handleChange={handleChange}
            inputKey={'balcony'}
            text={'Балкон'}
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
    marginTop: 6,
    flexDirection: 'row',
  },
  ownerBtn: {
    backgroundColor: Colors.gray700,
    marginLeft: 16,
  },
});

import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {containerStyle} from '../../../styles/containerStyle';
import {AgEnum, Text} from '../../../components/ui/Text';
import {Header} from '../../../components/ui/Header';
import Input from '../../../components/ui/Input';
import {Button} from '../../../components/ui/Button';
import {Colors} from '../../../styles/Colors';
import {AlertModal} from '../../../components/ui/AlertModal';
import {useForm} from 'react-hook-form';
import {CustomCheckBox} from '../../../components/ui/CustomCheckBox';
import {IconSvgPlus} from '../../../assets/icons/IconSvgPlus';
import {observer} from 'mobx-react';
import {useRootStore} from '../../../base/hooks/useRootStore';
import {EFileType} from '../../../modules/file/FileTypes';
import Navigation from '../../../base/Navigation';
import {Screens} from '../../../navigation/Screens';
import {FormValidation} from '../../../validation/FormValidation';

export const AddApplicationScreen = observer(() => {
  const {fileStore, applicationStore, addressStore} = useRootStore();

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

  const uploadImage = async () => {
    const res = await fileStore.sendFile(EFileType.APPLICATION);

    if (res && res.serverFilesRes && res.localFilesRes) {
      applicationStore.setCreateApplicationPhotos(
        res.serverFilesRes,
        res.localFilesRes,
      );
    }
  };

  const sendData = (data: any) => {
    if (
      addressStore.selectAddress &&
      applicationStore.newApplicationPhotosData.length > 0
    ) {
      applicationStore.createApplication(data, addressStore.selectAddress);
    }
  };

  useEffect(() => {
    register('floor', FormValidation.required);
    register('floor_home', FormValidation.required);
    register('rooms', FormValidation.required);
    register('area', FormValidation.required);
    register('balcony');
    register('conditioner');
    register('fridge');
    register('stove');
    register('microwave');
    register('washing');
    register('wifi');
    register('price', FormValidation.required);
    register('pledge');
  }, []);

  return (
    <>
      <Header />
      <ScrollView>
        <View style={containerStyle}>
          <TouchableOpacity
            onPress={() => Navigation.navigate(Screens.ADDRESS)}>
            <Input
              label={'Адрес'}
              inputKey={'address'}
              editable={false}
              error={''}
              value={addressStore.selectAddress?.result || 'Выберите адрес'}
              onChangeText={handleChange}
            />
            {!addressStore.selectAddress && (
              <Text
                Ag={AgEnum.Small}
                style={{color: Colors.danger, marginTop: 6}}>
                Необходимо выбрать адрес
              </Text>
            )}
          </TouchableOpacity>

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
            error={errors.floor?.message}
            value={watch('floor')}
            onChangeText={handleChange}
            keyboardType={'numeric'}
            maxLength={2}
          />

          <Input
            label={'Этажей в доме'}
            inputKey={'floor_home'}
            error={errors.floor_home?.message}
            value={watch('floor_home')}
            onChangeText={handleChange}
            keyboardType={'numeric'}
            maxLength={2}
          />

          <Input
            label={'Количество комнат'}
            inputKey={'rooms'}
            error={errors.rooms?.message}
            value={watch('rooms')}
            onChangeText={handleChange}
            keyboardType={'numeric'}
            maxLength={1}
          />

          <Input
            label={'Площадь квартиры'}
            inputKey={'area'}
            error={errors.area?.message}
            value={watch('area')}
            onChangeText={handleChange}
            keyboardType={'numeric'}
            maxLength={3}
          />

          <View>
            <Text style={{marginTop: 16}} Ag={AgEnum.Body}>
              Фотографии
            </Text>

            <ScrollView horizontal={true}>
              <TouchableOpacity
                onPress={uploadImage}
                style={styles.addPhotoContainer}>
                <IconSvgPlus color={Colors.white} />
              </TouchableOpacity>

              {applicationStore.newApplicationPhotosLocal.map(photo => (
                <TouchableOpacity
                  key={photo.uri}
                  style={styles.addedPhotoContainer}>
                  <Image style={styles.addedPhoto} source={{uri: photo.uri}} />
                </TouchableOpacity>
              ))}
            </ScrollView>

            {applicationStore.newApplicationPhotosData.length === 0 && (
              <Text
                Ag={AgEnum.Small}
                style={{color: Colors.danger, marginTop: 6}}>
                Необходимо приложить одну или более фотографий
              </Text>
            )}
          </View>

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
            error={errors.price?.message}
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

          <Button
            style={{marginBottom: 16}}
            onPress={handleSubmit(sendData)}
            title={'Создать'}
          />
        </View>
      </ScrollView>

      <AlertModal
        visible={showOwnerModal}
        closeModal={() => setShowOwnerModal(false)}
        text={'На данный момент приложение работает только с собственниками'}
      />
    </>
  );
});

const styles = StyleSheet.create({
  ownerContainer: {
    marginTop: 3,
    flexDirection: 'row',
  },
  ownerBtn: {
    backgroundColor: Colors.gray700,
    marginLeft: 16,
  },
  addPhotoContainer: {
    marginTop: 6,
    backgroundColor: Colors.gray700,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  addedPhotoContainer: {
    marginTop: 6,
    backgroundColor: Colors.gray700,
    borderRadius: 6,
    width: 80,
    height: 80,
    marginLeft: 6,
  },
  addedPhoto: {
    borderRadius: 6,
    width: 80,
    height: 80,
  },
});

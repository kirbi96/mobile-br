import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AgEnum, Text} from '../../../components/ui/Text';
import Input from '../../../components/ui/Input';
import {useForm} from 'react-hook-form';
import {observer} from 'mobx-react';
import {containerStyle} from '../../../styles/containerStyle';
import {Button} from '../../../components/ui/Button';
import {useRootStore} from '../../../base/hooks/useRootStore';
import {IAddress} from '../../../modules/address/AddressTypes';
import Navigation from '../../../base/Navigation';

export const AddressScreen = observer(() => {
  const {addressStore} = useRootStore();

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
    addressStore.getAddressByString(data.address);
  };

  const userSelectAddress = (address: IAddress) => {
    addressStore.userSelectAddress(address);
    Navigation.pop();
  };

  useEffect(() => {
    register('address');
  }, []);

  return (
    <View style={containerStyle}>
      <Text Ag={AgEnum.H1}>Выберите адресс</Text>

      <Input
        label={'Адрес'}
        inputKey={'address'}
        disabled={true}
        placeholder={'Москва Пролетарская 55'}
        error={''}
        value={watch('address')}
        onChangeText={handleChange}
      />

      <Button onPress={handleSubmit(sendData)} title={'Найти'} />

      <View style={{marginTop: 16}}>
        {addressStore.addresses.map(item => (
          <TouchableOpacity
            style={{paddingVertical: 8}}
            key={item.fias_id}
            onPress={() => userSelectAddress(item)}>
            <Text Ag={AgEnum.Body}>{item.result}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
});

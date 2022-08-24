import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {containerStyle} from '../../../styles/containerStyle';
import {AgEnum, Text} from '../../../components/ui/Text';
import {Header} from '../../../components/ui/Header';
import Input from '../../../components/ui/Input';
import {Button} from '../../../components/ui/Button';
import {Colors} from '../../../styles/Colors';
import {AlertModal} from '../../../components/ui/AlertModal';

export const AddInScreen = () => {
  const [showOwnerModal, setShowOwnerModal] = useState(false);
  return (
    <>
      <Header />
      <ScrollView>
        <View style={containerStyle}>
          <Input label={'Адрес'} inputKey={''} error={''} />

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
            inputKey={''}
            error={''}
            keyboardType={'numeric'}
            maxLength={2}
          />

          <Input
            label={'Количество комнат'}
            inputKey={''}
            error={''}
            keyboardType={'numeric'}
            maxLength={1}
          />
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

import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {containerStyle} from '../../../../styles/containerStyle';
import {AgEnum, Text} from '../../../../components/ui/Text';
import {Header} from '../../../../components/ui/Header';
import {CustomCheckBox} from '../../../../components/ui/CustomCheckBox';

export const AppSettingsScreen = () => {
  return (
    <ScrollView style={containerStyle}>
      <Header hasBack={true} />
      <Text Ag={AgEnum.H1}>Настройки приложения</Text>

      <CustomCheckBox
        value={'true'}
        handleChange={() => {}}
        inputKey={'phoneHash'}
        text={'Хешировать номер моего телефона'}
      />

      <Text style={{marginTop: 32}} Ag={AgEnum.Title}>
        Будет доступно в следующих версиях
      </Text>
      <CustomCheckBox
        disabled={true}
        value={'false'}
        handleChange={() => {}}
        inputKey={'push'}
        text={'Получать push уведомления'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemsContainer: {
    marginTop: 16,
  },
});

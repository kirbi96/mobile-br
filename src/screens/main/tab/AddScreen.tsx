import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {AgEnum, Text} from '../../../components/ui/Text';
import {containerStyle} from '../../../styles/containerStyle';
import {Colors} from '../../../styles/Colors';
import navigation from '../../../base/Navigation';
import {Screens} from '../../../navigation/Screens';

export enum EAdsType {
  SELL = 'SELL',
  RENT_LONG = 'RENT_LONG',
  RENT_SHORT = 'RENT_SHORT',
}

export const AddScreen = () => {
  const navigateToAddInScreen = (type: EAdsType) => {
    navigation.navigate(Screens.ADD_APPLICATION, {type});
  };

  return (
    <View style={containerStyle}>
      <Text Ag={AgEnum.H1}>Создать новое объявление</Text>

      <View style={{marginTop: 16}}>
        <TouchableOpacity
          onPress={() => navigateToAddInScreen(EAdsType.SELL)}
          style={styles.addItemContainer}>
          <Text style={styles.addItemText} Ag={AgEnum.Body}>
            Продам квартиру
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateToAddInScreen(EAdsType.RENT_LONG)}
          style={styles.addItemContainer}>
          <Text style={styles.addItemText} Ag={AgEnum.Body}>
            Сдам квартиру (длительный срок)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateToAddInScreen(EAdsType.RENT_SHORT)}
          style={styles.addItemContainer}>
          <Text style={styles.addItemText} Ag={AgEnum.Body}>
            Сдам квартиру (посуточно)
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  addItemContainer: {
    paddingVertical: 12,
    marginTop: 12,
    borderRadius: 6,
    backgroundColor: Colors.gray700,
  },
  addItemText: {
    marginLeft: 12,
  },
});

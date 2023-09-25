import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AgEnum, Text} from './ui/Text';
import {Colors} from '../styles/Colors';
import {IApplication} from '../modules/application/ApplicationTypes';
import {getImageUrl} from '../helpers/ImageHelper';

interface IApplicationCard {
  pressCard: () => void;
  item: IApplication;
}

export const ApplicationCard = ({pressCard, item}: IApplicationCard) => {
  return (
    <TouchableOpacity onPress={pressCard} style={styles.item}>
      <Image
        source={{uri: getImageUrl(item.files[0].url)}}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text Ag={AgEnum.Body}>Квартира {item.price} Р</Text>
        <Text Ag={AgEnum.Description}>
          Комнат {item.rooms}, площадь {item.area}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderRadius: 6,
    flexDirection: 'row',
    backgroundColor: Colors.gray700,
    marginVertical: 10,
  },
  textContainer: {
    marginLeft: 16,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 12,
  },
});

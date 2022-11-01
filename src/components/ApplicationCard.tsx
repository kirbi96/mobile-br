import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AgEnum, Text} from './ui/Text';
import {Colors} from '../styles/Colors';

interface IApplicationCard {
  pressCard: () => void;
  item: any;
  image: string;
}

export const ApplicationCard = ({pressCard, item, image}: IApplicationCard) => {
  return (
    <TouchableOpacity onPress={pressCard} style={styles.item}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text Ag={AgEnum.Body}>Квартира {+item + 1}</Text>
        <Text Ag={AgEnum.Description}>
          Краткое описание для квартиры {+item + 1}
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

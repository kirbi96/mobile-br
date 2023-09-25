import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {containerStyle} from '../../../../styles/containerStyle';
import {AgEnum, Text} from '../../../../components/ui/Text';
import {Header} from '../../../../components/ui/Header';

const data = [
  {
    id: 1,
    title: 'Title',
    answer: 'answer',
  },
  {
    id: 2,
    title: 'Title',
    answer: 'answer',
  },
];

export const FaqScreen = () => {
  return (
    <ScrollView style={containerStyle}>
      <Header hasBack={true} />
      <Text Ag={AgEnum.H1}>ЧАВО</Text>

      <View style={styles.itemsContainer}>
        {data.map(item => (
          <TouchableOpacity key={item.id} style={styles.itemContainer}>
            <Text Ag={AgEnum.H2}>{item.title}</Text>
            <Text Ag={AgEnum.Subtitle}>{item.answer}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemsContainer: {
    marginTop: 16,
  },
  itemContainer: {
    paddingVertical: 8,
  },
});

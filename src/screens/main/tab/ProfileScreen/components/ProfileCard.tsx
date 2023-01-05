import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {AgEnum, Text} from '../../../../../components/ui/Text';
import {Colors} from '../../../../../styles/Colors';

interface IProfileCard {
  title: string;
  description?: string;
  onPress: () => void;
}

export const ProfileCard = ({title, description, onPress}: IProfileCard) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Text Ag={AgEnum.Title}>{title}</Text>
      {description && (
        <Text color={Colors.gray300} Ag={AgEnum.Small}>
          {description}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 8,
    backgroundColor: Colors.gray700,
    padding: 8,
    borderRadius: 4,
  },
});

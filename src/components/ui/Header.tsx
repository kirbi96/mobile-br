import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Navigation from '../../base/Navigation';
import {Colors} from '../../styles/Colors';
import {Text, AgEnum} from './Text';
import {IconSvgArrowLeft} from '../../assets/icons/IconSvgArrowLeft';

interface IHeader {
  title?: string;
  hasBack?: boolean;
}

export const Header = ({title, hasBack = true}: IHeader) => {
  const handlePressBack = () => {
    Navigation.pop();
  };

  return (
    <View style={styles.container}>
      {hasBack && (
        <TouchableOpacity onPress={handlePressBack} style={styles.btn}>
          <IconSvgArrowLeft color={Colors.white} size={16} />
        </TouchableOpacity>
      )}

      {title && (
        <Text style={styles.title} Ag={AgEnum.Body}>
          {title}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 6,
  },
  btn: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Colors.shadow,
  },
  title: {
    marginLeft: 15,
  },
});

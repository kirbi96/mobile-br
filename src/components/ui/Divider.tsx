import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../styles/Colors';

interface IDivider {
  marginTop?: number;
}

export const Divider = ({marginTop = 16}: IDivider) => {
  return <View style={[styles.divider, {marginTop}]} />;
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.gray300,
  },
});

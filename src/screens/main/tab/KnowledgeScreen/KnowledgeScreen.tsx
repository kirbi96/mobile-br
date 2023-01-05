import React from 'react';
import {View} from 'react-native';
import {AgEnum, Text} from '../../../../components/ui/Text';
import {containerStyle} from '../../../../styles/containerStyle';

export const KnowledgeScreen = () => {
  return (
    <View style={containerStyle}>
      <Text Ag={AgEnum.H1}>В разработке</Text>
    </View>
  );
};

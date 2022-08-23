import React from 'react';
import {ScrollView, View} from 'react-native';
import {containerStyle} from '../../../styles/containerStyle';
import {AgEnum, Text} from '../../../components/ui/Text';
import {Header} from '../../../components/ui/Header';

export const AddInScreen = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <View style={containerStyle}>
          <Text Ag={AgEnum.Description}>123</Text>
        </View>
      </ScrollView>
    </>
  );
};

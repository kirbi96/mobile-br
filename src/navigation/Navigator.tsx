import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Navigation from '../base/Navigation';
import {Colors} from '../styles/Colors';
import {StackTab} from './StackTab/StackTab';
import { StatusBar } from "react-native";

export type RootStackParamList = {
  // SCREEN_NAME: {param: IParam};
};

const Stack = createStackNavigator<RootStackParamList>();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.gray800,
  },
};

const Navigator = () => {
  return (
    <NavigationContainer theme={AppTheme} ref={Navigation.navigationRef}>
      <StatusBar backgroundColor={Colors.gray800}/>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {StackTab}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

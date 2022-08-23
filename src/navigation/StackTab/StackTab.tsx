import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../Screens';
import {BottomTab} from '../BottomTab/BottomTab';
import {AddInScreen} from '../../screens/main/AddInScreen/AddInScreen';

const Stack = createStackNavigator();

export const StackTab = (
  <>
    <Stack.Screen name={Screens.APP} component={BottomTab} />
    <Stack.Screen name={Screens.ADD_IN} component={AddInScreen} />
  </>
);

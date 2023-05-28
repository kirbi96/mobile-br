import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../Screens';
import {BottomTab} from '../BottomTab/BottomTab';
import {AddApplicationScreen} from '../../screens/main/AddApplicationScreen/AddApplicationScreen';
import {InApplicationScreen} from '../../screens/main/InApplicationScreen/InApplicationScreen';

const Stack = createStackNavigator();

export const MainStack = (
  <>
    <Stack.Screen name={Screens.APP} component={BottomTab} />
    <Stack.Screen
      name={Screens.ADD_APPLICATION}
      component={AddApplicationScreen}
    />
    <Stack.Screen
      name={Screens.IN_APPLICATION}
      component={InApplicationScreen}
    />
  </>
);

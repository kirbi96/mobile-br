import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../Screens';
import {BottomTab} from '../BottomTab/BottomTab';

const Stack = createStackNavigator();

export const StackTab = (
  <>
    <Stack.Screen name={Screens.APP} component={BottomTab} />
    {/*another screen*/}
    {/*<Stack.Screen name={screens.TASK_IN} component={TaskInScreen} />*/}
  </>
);

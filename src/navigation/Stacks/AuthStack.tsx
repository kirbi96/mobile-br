import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../Screens';
import {AuthScreen} from '../../screens/auth/AuthScreen';
import {RegScreen} from '../../screens/auth/RegScreen';

const Stack = createStackNavigator();

export const AuthStack = (
  <>
    <Stack.Screen name={Screens.AUTH} component={AuthScreen} />
    <Stack.Screen name={Screens.REGISTRATION} component={RegScreen} />
  </>
);

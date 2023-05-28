import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Navigation from '../base/Navigation';
import {Colors} from '../styles/Colors';
import {MainStack} from './Stacks/MainStack';
import {StatusBar} from 'react-native';
import {AuthStack} from './Stacks/AuthStack';
import {observer} from 'mobx-react';
import {useRootStore} from '../base/hooks/useRootStore';

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

const Navigator = observer(() => {
  const {authStore} = useRootStore();

  return (
    <NavigationContainer theme={AppTheme} ref={Navigation.navigationRef}>
      <StatusBar backgroundColor={Colors.gray800} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {authStore.token ? MainStack : AuthStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Navigator;

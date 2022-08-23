import React from 'react';

import {Colors} from '../../styles/Colors';
import {Screens} from '../Screens';
import Navigation from '../../base/Navigation';
import {HomeScreen} from '../../screens/main/tab/HomeScreen';
import {IconSvgTabHome} from '../../assets/icons/tab/IconSvgTabHome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconSvgTabFavorite} from '../../assets/icons/tab/IconSvgTabFavorite';
import {IconSvgTabRating} from '../../assets/icons/tab/IconSvgTabRating';
import {IconSvgTabProfile} from '../../assets/icons/tab/IconSvgTabProfile';
import {FavoriteScreen} from '../../screens/main/tab/FavoriteScreen';
import {KnowledgeScreen} from '../../screens/main/tab/KnowledgeScreen';
import {ProfileScreen} from '../../screens/main/tab/ProfileScreen';
import {AddScreen} from '../../screens/main/tab/AddScreen';
import {IconSvgTabAdd} from '../../assets/icons/tab/IconSvgTabAdd';
import {StyleProp, TextStyle} from 'react-native';

const Tab = createBottomTabNavigator();

const tabBarLabelStyle: StyleProp<TextStyle> = {
  fontFamily: 'Mipgost',
  fontSize: 14,
};

export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.gray800,
          borderTopColor: Colors.light_grey,
        },
      }}
      initialRouteName={Navigation.initialRoute}>
      <Tab.Screen
        name={Screens.HOME}
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: Colors.white,
          tabBarLabelStyle,
          tabBarLabel: 'Главная',
          tabBarIcon: () => <IconSvgTabHome />,
        }}
      />
      <Tab.Screen
        name={Screens.FAVORITE}
        component={FavoriteScreen}
        options={{
          tabBarActiveTintColor: Colors.white,
          tabBarLabelStyle,
          tabBarLabel: 'Избранное',
          tabBarIcon: () => <IconSvgTabFavorite />,
        }}
      />
      <Tab.Screen
        name={Screens.ADD}
        component={AddScreen}
        options={{
          tabBarActiveTintColor: Colors.white,
          tabBarIconStyle: {width: 40},
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: ({focused}) => (
            <IconSvgTabAdd color={focused ? Colors.white : '#00e588'} />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.KNOWLEDGE}
        component={KnowledgeScreen}
        options={{
          tabBarActiveTintColor: Colors.white,
          tabBarLabelStyle,
          tabBarLabel: 'База знаний',
          tabBarIcon: () => <IconSvgTabRating />,
        }}
      />
      <Tab.Screen
        name={Screens.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: Colors.white,
          tabBarLabelStyle,
          tabBarLabel: 'Профиль',
          tabBarIcon: () => <IconSvgTabProfile />,
        }}
      />
    </Tab.Navigator>
  );
};

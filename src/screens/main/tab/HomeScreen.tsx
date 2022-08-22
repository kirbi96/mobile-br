import React from 'react';
import {View} from 'react-native';
import YaMap from 'react-native-yamap';
import {appConfig} from '../../../appConfig';
import {BottomSheet} from '../../../components/ui/BottomSheet';

export const HomeScreen = () => {
  YaMap.init(appConfig.yandexKey);

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <YaMap
        userLocationIcon={{
          uri: 'https://www.clipartmax.com/png/middle/180-1801760_pin-png.png',
        }}
        initialRegion={{
          lat: 50,
          lon: 50,
          zoom: 10,
          azimuth: 80,
          tilt: 100,
        }}
        style={{
          flex: 1,
        }}
      />

      <BottomSheet />
    </View>
  );
};

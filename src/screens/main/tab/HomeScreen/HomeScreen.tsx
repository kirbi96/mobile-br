import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import YaMap, {Marker} from 'react-native-yamap';
import {appConfig} from '../../../../appConfig';
import {BottomSheet} from '../../../../components/ui/BottomSheet';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import navigation from '../../../../base/Navigation';
import {Screens} from '../../../../navigation/Screens';

const markersArr = [
  {lat: 55.8020027, lon: 49.067523},
  {lat: 55.8020027, lon: 49.067522},
];

export const HomeScreen = () => {
  YaMap.init(appConfig.yandexKey);

  const [myGeo, setMyGeo] = useState<GeolocationResponse | null>(null);

  const navigateToApplication = () => {
    navigation.navigate(Screens.IN_APPLICATION);
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(info => setMyGeo(info));
  }, []);

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <YaMap
        nightMode={true}
        userLocationIcon={{
          uri: 'https://img.icons8.com/color/2x/map-pin.png',
        }}
        initialRegion={{
          lat: myGeo?.coords?.latitude || 50,
          lon: myGeo?.coords?.longitude || 50,
        }}
        style={{flex: 1}}>
        {markersArr.map(i => (
          <Marker
            onPress={navigateToApplication}
            key={i.lon}
            scale={2}
            point={{
              lat: i.lat,
              lon: i.lon,
            }}
          />
        ))}
      </YaMap>

      <BottomSheet />
    </View>
  );
};

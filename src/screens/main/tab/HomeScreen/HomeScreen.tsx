import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import YaMap, {Animation, Marker, CameraPosition} from 'react-native-yamap';
import {appConfig} from '../../../../appConfig';
import {BottomSheet} from '../../../../components/ui/BottomSheet';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import navigation from '../../../../base/Navigation';
import {Screens} from '../../../../navigation/Screens';
import {observer} from 'mobx-react';
import {useRootStore} from '../../../../base/hooks/useRootStore';
import {AgEnum, Text} from '../../../../components/ui/Text';
import {Colors} from '../../../../styles/Colors';

YaMap.init(appConfig.yandexKey);

export const HomeScreen = observer(() => {
  const {applicationStore} = useRootStore();

  const [myGeo, setMyGeo] = useState<GeolocationResponse | null>(null);

  const mapRef = useRef<any>(null);

  const navigateToApplication = (id: number) => {
    navigation.navigate(Screens.IN_APPLICATION, {applicationId: id});
  };

  const changeZoom = (isPlus: boolean) => {
    mapRef.current.getCameraPosition((e: any) => {
      const newZoom = e.nativeEvent.zoom + (isPlus ? 0.5 : -0.5);
      mapRef.current.setZoom(newZoom, 0.2, Animation.SMOOTH);
    });
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(info => setMyGeo(info));
  }, []);

  useEffect(() => {
    applicationStore.getAllApplications();
  }, []);

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <TouchableOpacity
        onPress={() => changeZoom(true)}
        style={styles.iconPlus}>
        <Text color={Colors.black} Ag={AgEnum.H1}>
          +
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => changeZoom(false)}
        style={styles.iconMinus}>
        <Text color={Colors.black} Ag={AgEnum.H1}>
          -
        </Text>
      </TouchableOpacity>

      <YaMap
        ref={mapRef}
        nightMode={true}
        userLocationIcon={{
          uri: 'https://img.icons8.com/color/2x/map-pin.png',
        }}
        initialRegion={{
          lat: myGeo?.coords?.latitude || 50,
          lon: myGeo?.coords?.longitude || 50,
        }}
        style={{flex: 1}}>
        {applicationStore.allApplications.map(application => (
          <Marker
            onPress={() => navigateToApplication(application.id)}
            key={application.id}
            scale={2}
            point={{
              lat: +application.address.geo_lat,
              lon: +application.address.geo_lon,
            }}
          />
        ))}
      </YaMap>

      <BottomSheet />
    </View>
  );
});

const styles = StyleSheet.create({
  iconPlus: {
    width: 36,
    height: 36,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray300,
    position: 'absolute',
    right: 16,
    top: 200,
    zIndex: 1000,
  },
  iconMinus: {
    width: 36,
    height: 36,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray300,
    position: 'absolute',
    right: 16,
    top: 250,
    zIndex: 1000,
  },
});

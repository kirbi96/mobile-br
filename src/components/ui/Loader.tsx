import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps, View} from 'react-native';
import {Colors} from '../../styles/Colors';

export const Loader = (props: ActivityIndicatorProps) => {
  return <ActivityIndicator size={'large'} color={Colors.leaf} {...props} />;
};

export const LoaderFlex = (props: ActivityIndicatorProps) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.gray800,
      }}>
      <ActivityIndicator size={'large'} color={Colors.danger} {...props} />
    </View>
  );
};

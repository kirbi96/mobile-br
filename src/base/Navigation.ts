import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/core';
import {Screens} from '../navigation/Screens';

export interface NavigationParams {
  [key: string]: any;
}

class NavigationC {
  // @ts-ignore
  navigationRef = React.createRef<NavigationContainerRef>();

  initialRoute = Screens.HOME;

  // setInitialRoute = (route: string) => {
  //   this.initialRoute = route;
  // };

  navigate = (routeName: string, params?: NavigationParams) => {
    // https://github.com/react-navigation/react-navigation/issues/6879
    setTimeout(
      () => this.navigationRef.current?.navigate(routeName, params),
      0,
    );
  };

  replace = (routeName: string, params?: NavigationParams) => {
    // https://github.com/react-navigation/react-navigation/issues/6879
    setTimeout(
      () =>
        this.navigationRef.current?.reset({
          index: 0,
          routes: [{name: routeName, params: params}],
        }),
      0,
    );
  };

  pop = () => {
    this.navigationRef.current?.goBack();
  };
}

const Navigation = new NavigationC();
export default Navigation;

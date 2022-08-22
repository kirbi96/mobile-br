import React from 'react';
import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {IIcon} from '../../../base/types/BaseTypes';

export const IconSvgTabFavorite = ({size, color}: IIcon) => {
  return (
    <Svg width={40} height={40} fill="none">
      <G>
        <Path
          d="M7.298 20.965A8.337 8.337 0 015 15.2c0-4.598 3.694-8.325 8.25-8.325 1.624 0 3.138.473 4.414 1.29 1.341.86 3.33.86 4.672 0a8.157 8.157 0 014.414-1.29c4.556 0 8.25 3.727 8.25 8.325a8.337 8.337 0 01-2.511 5.982l-10.85 11.241a2.266 2.266 0 01-3.278 0L7.298 20.966z"
          fill="url(#prefix__paint0_linear_5:145)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_5:145"
          x1={20}
          y1={6.875}
          x2={20}
          y2={33.125}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FC1878" />
          <Stop offset={1} stopColor="#FF1E1E" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

import React from 'react';
import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

import {IIcon} from '../../../base/types/BaseTypes';

export const IconSvgTabProfile = ({size, color}: IIcon) => {
  return (
    <Svg width={32} height={32} fill="none">
      <G>
        <Path
          d="M21.5 9.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
          fill="url(#prefix__paint0_linear_10:0)"
        />
        <Path
          d="M6.699 20.266C9.206 18.23 12.453 17 16 17c3.547 0 6.794 1.23 9.301 3.266a2.861 2.861 0 010 4.468C22.794 26.77 19.547 28 16.001 28c-3.548 0-6.795-1.23-9.302-3.266a2.861 2.861 0 010-4.468z"
          fill="url(#prefix__paint1_linear_10:0)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_10:0"
          x1={16}
          y1={4}
          x2={16}
          y2={28}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#2CA6FF" />
          <Stop offset={1} stopColor="#1874FF" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_10:0"
          x1={16}
          y1={4}
          x2={16}
          y2={28}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#2CA6FF" />
          <Stop offset={1} stopColor="#1874FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

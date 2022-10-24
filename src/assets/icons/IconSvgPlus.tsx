import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {IIcon} from '../../base/types/BaseTypes';

export const IconSvgPlus = ({size, color}: IIcon) => {
  return (
    <Svg width={size || 50} height={size || 50}>
      <Path
        fill={color || '#FFF'}
        d="M25 2C12.31 2 2 12.31 2 25s10.31 23 23 23 23-10.31 23-23S37.69 2 25 2zm0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21S4 36.61 4 25 13.39 4 25 4zm-1 9v11H13v2h11v11h2V26h11v-2H26V13h-2z"
      />
    </Svg>
  );
};

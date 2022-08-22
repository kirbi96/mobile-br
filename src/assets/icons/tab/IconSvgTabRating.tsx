import React from 'react';
import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {IIcon} from '../../../base/types/BaseTypes';

export const IconSvgTabRating = ({size, color}: IIcon) => {
  return (
    <Svg width={54} height={56} fill="none">
      <G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.099 15.273h-5.513c-1.939 0-3.356 1.65-3.159 3.58l.801 7.838c.17 1.67 1.571 2.9 3.25 2.9h9.442c1.673 0 3.051-1.343 3.229-3.007l.833-7.805c.206-1.934-1.291-3.506-3.236-3.506h-5.647z"
          fill="url(#prefix__paint0_linear_5:3)"
        />
      </G>
      <G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.414 20.268c1.005-.573 2.286-.505 3.29.067l8.323 4.746c1.021.582 1.632 1.75 1.632 2.925v9.493c0 1.175-.728 2.223-1.749 2.805l-8.324 4.746c-1.005.573-2.213.547-3.218-.026-2.808-1.6-5.615-3.202-8.423-4.803-1.021-.582-1.604-1.733-1.604-2.908v-9.494c0-1.175.728-2.223 1.749-2.805l8.324-4.746z"
          fill="url(#prefix__paint1_linear_5:3)"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.477 29.057a.637.637 0 011.046 0l1.027 1.485c.082.119.204.206.344.247l1.742.509a.626.626 0 01.323.986l-1.108 1.426a.625.625 0 00-.13.4l.05 1.8a.633.633 0 01-.847.61l-1.712-.604a.64.64 0 00-.424 0l-1.712.604a.633.633 0 01-.846-.61l.05-1.8a.625.625 0 00-.131-.4l-1.108-1.426a.626.626 0 01.323-.986l1.742-.509a.634.634 0 00.344-.248l1.027-1.484z"
        fill="#fff"
        fillOpacity={0.4}
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_5:3"
          x1={29.205}
          y1={15.273}
          x2={29.205}
          y2={29.591}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#C58AFF" />
          <Stop offset={1} stopColor="#992FFF" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_5:3"
          x1={29}
          y1={19.87}
          x2={29}
          y2={45.467}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFF38A" />
          <Stop offset={1} stopColor="#FFCA42" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

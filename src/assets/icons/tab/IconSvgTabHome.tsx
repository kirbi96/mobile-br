import React from 'react';
import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {IIcon} from '../../../base/types/BaseTypes';

export const IconSvgTabHome = ({size, color}: IIcon) => {
  return (
    <Svg width={64} height={60} fill="none">
      <G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32 21.818l9.818 5.625v9.675c0 1.027-.582 1.909-1.472 2.419l-5.759 3.299c-1.638.938-3.6.902-5.238-.037l-5.805-3.326c-.891-.51-1.362-1.44-1.362-2.467v-9.563L32 21.818z"
          fill="url(#prefix__paint0_linear_5:10)"
        />
      </G>
      <G>
        <Path
          d="M18.577 22.835l11.3-6.567a3.005 3.005 0 01.456-.217 4.055 4.055 0 01.796-.218 4.66 4.66 0 01.577-.067 5.137 5.137 0 011.305.093 4.517 4.517 0 01.656.192 3.735 3.735 0 01.349.158c.036.02.072.039.106.06l11.301 6.566a2.715 2.715 0 01.289.194 2.061 2.061 0 01.302.294 1.53 1.53 0 01.159.239 1.19 1.19 0 01.115.335 1.032 1.032 0 01-.115.677 1.276 1.276 0 01-.159.24 1.723 1.723 0 01-.302.293 2.478 2.478 0 01-.289.194l-11.3 6.567a2.925 2.925 0 01-.456.217 3.59 3.59 0 01-.384.127 4.342 4.342 0 01-.697.133 4.913 4.913 0 01-.88.026 4.72 4.72 0 01-1.373-.286 3.52 3.52 0 01-.455-.217l-11.301-6.567a2.856 2.856 0 01-.289-.194 2.136 2.136 0 01-.236-.217 1.723 1.723 0 01-.179-.234 1.276 1.276 0 01-.143-.332 1.063 1.063 0 01-.018-.427 1.051 1.051 0 01.115-.335 1.276 1.276 0 01.159-.24 1.666 1.666 0 01.218-.223 2.061 2.061 0 01.271-.202c.033-.021.067-.042.102-.062z"
          fill="url(#prefix__paint1_linear_5:10)"
        />
      </G>
      <G>
        <Path
          d="M44.273 26.727a.825.825 0 01.632.3.814.814 0 01.186.518v11.046a.826.826 0 01-.24.578.82.82 0 01-.964.144.826.826 0 01-.417-.563.817.817 0 01-.015-.16V27.546a.824.824 0 01.299-.632.79.79 0 01.281-.15.806.806 0 01.238-.036z"
          fill="url(#prefix__paint2_linear_5:10)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_5:10"
          x1={32}
          y1={21.818}
          x2={32}
          y2={43.522}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#BEFFDB" />
          <Stop offset={1} stopColor="#9EFFC4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_5:10"
          x1={32}
          y1={14.864}
          x2={32}
          y2={33.273}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#95F8C4" />
          <Stop offset={1} stopColor="#61F098" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear_5:10"
          x1={44.273}
          y1={26.727}
          x2={44.273}
          y2={39.409}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFF38A" />
          <Stop offset={1} stopColor="#FFCA42" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

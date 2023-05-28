import Svg, {Circle, Path} from 'react-native-svg';
import React from 'react';
import {IIcon} from '../../../base/types/BaseTypes';

export const IconSvgExit = ({size, color}: IIcon) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{
        enableBackground: 'new 0 0 512 512',
      }}
      xmlSpace="preserve">
      <Path
        style={{
          fill: '#9ad14b',
        }}
        d="M477.261 419.64H34.738c-14.258 0-25.816-11.558-25.816-25.816v-168.28c0-14.258 11.558-25.816 25.816-25.816h442.523c14.258 0 25.816 11.558 25.816 25.816v168.28c0 14.258-11.558 25.816-25.816 25.816z"
      />
      <Circle
        style={{
          fill: '#f7b239',
        }}
        cx={256.003}
        cy={114.998}
        r={22.64}
      />
      <Path
        style={{
          fill: '#f2f2f2',
        }}
        d="M301.3 258.454a8.923 8.923 0 0 0-8.923 8.923v84.615a8.923 8.923 0 0 0 17.846 0v-84.615a8.923 8.923 0 0 0-8.923-8.923zM256.921 259.98a8.922 8.922 0 0 0-12.387 2.404l-21.156 31.348-21.156-31.348a8.92 8.92 0 0 0-12.387-2.404 8.922 8.922 0 0 0-2.404 12.387l25.184 37.317-25.184 37.317a8.922 8.922 0 0 0 2.404 12.387 8.917 8.917 0 0 0 12.388-2.405l21.156-31.348 21.156 31.348a8.915 8.915 0 0 0 7.405 3.933 8.88 8.88 0 0 0 4.983-1.528 8.922 8.922 0 0 0 2.404-12.387l-25.184-37.317 25.184-37.317a8.921 8.921 0 0 0-2.406-12.387zM159.174 276.3a8.923 8.923 0 0 0 0-17.846h-50.041a8.923 8.923 0 0 0-8.923 8.923v84.615a8.923 8.923 0 0 0 8.923 8.923h50.042a8.923 8.923 0 0 0 0-17.846h-41.119v-23.552h16.098a8.923 8.923 0 0 0 0-17.846h-16.098V276.3h41.118zM402.866 258.454h-61.565a8.923 8.923 0 0 0 0 17.846h21.86v75.692a8.923 8.923 0 0 0 17.846 0V276.3h21.86a8.923 8.923 0 1 0-.001-17.846z"
      />
      <Path
        style={{
          fill: '#333',
        }}
        d="M477.261 190.805H367.064l-79.76-79.76C285.353 95.503 272.063 83.436 256 83.436c-16.064 0-29.353 12.066-31.305 27.609l-79.76 79.76H34.738C15.584 190.805 0 206.389 0 225.544v168.28c0 19.156 15.584 34.738 34.738 34.738h442.523c19.156 0 34.738-15.584 34.738-34.738v-168.28c.001-19.155-15.583-34.739-34.738-34.739zm-221.26-89.522c7.562 0 13.715 6.152 13.715 13.715s-6.152 13.715-13.715 13.715-13.715-6.152-13.715-13.715c-.002-7.563 6.152-13.715 13.715-13.715zm-26.746 30.441c5.587 8.901 15.484 14.835 26.746 14.835 11.262 0 21.159-5.933 26.746-14.835l59.081 59.081H170.173l59.082-59.081zm264.899 262.1c0 9.315-7.578 16.893-16.893 16.893H34.738c-9.315 0-16.893-7.578-16.893-16.893v-168.28c0-9.315 7.578-16.893 16.893-16.893h442.523c9.315 0 16.893 7.578 16.893 16.893v168.28z"
      />
    </Svg>
  );
};
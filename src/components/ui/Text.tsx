import React from 'react';
import {StyleSheet, Text as RNText, TextProps} from 'react-native';

import {Colors} from '../../styles/Colors';

export enum AgEnum {
  H1 = 'h1',
  H2 = 'h2',
  Subtitle = 'subtitle',
  Body = 'body',
  Description = 'description',
  Small = 'small',
}

interface IText extends TextProps {
  Ag: AgEnum;
  children?: string | React.ReactNode[];
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  color?: string;
}

export const Text = (props: IText) => {
  const {Ag, color, align} = props;

  return (
    <RNText
      {...props}
      style={[
        styles[Ag],
        {
          color: color || Colors.black_70,
          textAlign: align || 'auto',
        },
        props.style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  [AgEnum.H1]: {
    fontSize: 28,
    lineHeight: 34,
    fontFamily: 'Mipgost',
  },
  [AgEnum.H2]: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Mipgost',
  },
  [AgEnum.Subtitle]: {
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Mipgost',
  },
  [AgEnum.Body]: {
    fontSize: 18,
    lineHeight: 20,
    fontFamily: 'Mipgost',
  },
  [AgEnum.Description]: {
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: -0.08,
    fontFamily: 'Mipgost',
  },
  [AgEnum.Small]: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: 'Mipgost',
  },
});

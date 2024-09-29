import React, { ReactNode } from 'react';
import { TouchableHighlightProps, TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Props as TextProps } from '../TextApp/types';

export enum ButtonSize {
  XL = 'XL',
  LG = 'LG',
  MD = 'MD',
  SM = 'SM',
}

export enum ButtonModes {
  filled = 'filled',
  outlined = 'outlined',
  text = 'text',
}

export type AlignIcon = 'left' | 'right';

export type IconComponent = React.FC<SvgProps> | React.ComponentType;

export interface ButtonProps extends TouchableOpacityProps {
  loading?: boolean;
  size: keyof typeof ButtonSize | undefined;
  mode: keyof typeof ButtonModes | undefined;
  color?: string | undefined;
  alignIcon?: AlignIcon;
  labelColor?: string;
  iconSize?: number;
  icon?: JSX.Element | React.FC<SvgProps> | ReactNode;
  isIconButton?: boolean;
  iconShape?: 'round' | 'square';
  iconTestID?: string;
}

export interface ContainerButtonProps extends TouchableHighlightProps {
  mode: keyof typeof ButtonModes;
  disabled: boolean;
  size: keyof typeof ButtonSize;
  mainColor: string;
}

export interface LabelProps extends TextProps {
  mode: keyof typeof ButtonModes;
  disabled: boolean;
  labelColor?: string;
  pressed?: boolean;
}

export interface IconProps {
  mode: keyof typeof ButtonModes;
  buttonSize: keyof typeof ButtonSize;
  disabled: boolean;
  mainColor?: string;
}

export interface MainContainerProps extends TouchableHighlightProps {
  pressedColor: string;
  isIconButton?: boolean;
  iconShape?: 'round' | 'square';
}

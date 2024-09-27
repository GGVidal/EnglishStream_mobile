import * as React from 'react';
import { Text } from 'react-native';
import type { Props } from './types';
import { FontTypes } from '@styles/fonts';
import { colors } from '@styles/colors/';

const TextApp = ({
  children,
  style,
  variation,
  size = 'SM',
  title,
  color,
  ...rest
}: Props) => {
  if (!FontTypes[variation]) return null;

  return (
    <Text
      accessible={false}
      accessibilityLabel={typeof children === 'string' ? children : ''}
      style={[
        FontTypes[variation][size],
        title && { color: colors.grays.darkest },
        Boolean(color) && { color: color },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

type TextComponent = (props: Props) => JSX.Element;

const Component = TextApp as TextComponent;

export default Component;

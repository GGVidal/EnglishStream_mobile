import React from 'react';

import { LinkProps } from './types';
import * as S from './styles';
import { colors } from '@styles/colors';

const Link = ({
  text,
  position,
  color = colors.blues.lighter,
  disabled,
  onPress,
  size,
  variation,
  ...props
}: LinkProps) => {
  return (
    <S.Touch disabled={disabled} onPress={onPress} {...props}>
      <S.Container>
        {position === 'left' && (
          <S.Icon color={color} disabled={disabled} testID="left-icon" />
        )}
        <S.Text
          size={size}
          variation={variation}
          position={position}
          color={color}
          disabled={disabled}
        >
          {text}
        </S.Text>
        {position === 'right' && (
          <S.Icon color={color} disabled={disabled} testID="right-icon" />
        )}
      </S.Container>
    </S.Touch>
  );
};

export default Link;
export { LinkProps };

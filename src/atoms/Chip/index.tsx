import React from 'react';
import { ChipProps } from './types';
import * as S from './styles';

export const Chip: React.FC<ChipProps> = ({
  backgroundColor,
  textColor,
  text,
  ...props
}) => {
  return (
    <S.ChipContainer {...props} backgroundColor={backgroundColor}>
      <S.ChipText variation="Button" size="SM" textColor={textColor}>
        {text}
      </S.ChipText>
    </S.ChipContainer>
  );
};

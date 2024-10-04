import React from 'react';
import { ChipProps } from './types';
import * as S from './styles';

export const Chip: React.FC<ChipProps> = ({
  backgroundColor,
  textColor,
  text,
  icon,
  ...props
}) => {
  return (
    <S.ChipContainer {...props} backgroundColor={backgroundColor}>
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      <S.ChipText variation="Button" size="SM" textColor={textColor}>
        {text}
      </S.ChipText>
    </S.ChipContainer>
  );
};

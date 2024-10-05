import { CardClassContent } from '@molecules/CardClassContent';
import { CardClassHeader } from '@molecules/CardClassHeader';
import React from 'react';
import FlagPlus from '@assets/icons/flag_plus.svg';
import * as S from './styles';

export const CardClass = () => {
  return (
    <S.CardContainer>
      <CardClassHeader />
      <CardClassContent />
      <S.StyledButton
        size="MD"
        mode="filled"
        color="secondary"
        icon={FlagPlus}
        alignIcon="right"
      >
        Add Class
      </S.StyledButton>
    </S.CardContainer>
  );
};

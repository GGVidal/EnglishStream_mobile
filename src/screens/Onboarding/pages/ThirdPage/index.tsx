import React from 'react';
import { colors } from '@styles/colors';
import { Container, ShadowText, TextFluent, TextWith } from './styles';

export const ThirdPage = () => {
  return (
    <Container>
      <ShadowText
        variation={'Subtitle'}
        color={colors.blues.lighter}
        size={'XL'}
      >
        Seja
      </ShadowText>
      <TextFluent
        variation={'Heading'}
        color={colors.blues.lighter}
        size={'XXXL'}
      >
        Fluente
      </TextFluent>
      <TextWith
        variation={'Subtitle'}
        color={colors.blues.lighter}
        size={'XXL'}
      >
        com
      </TextWith>
      <ShadowText variation={'Heading'} color={colors.reds.main} size={'LG'}>
        naturalidade
      </ShadowText>
    </Container>
  );
};

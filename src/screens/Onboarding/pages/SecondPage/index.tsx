import React from 'react';
import { colors } from '@styles/colors';
import { Container, LeftAlignedText, ShadowText } from './styles';

export const SecondPage = () => {
  return (
    <Container>
      <ShadowText variation={'Heading'} color={colors.reds.main} size={'XXL'}>
        Aperfeiçoe
      </ShadowText>
      <LeftAlignedText>
        <ShadowText
          variation={'Heading'}
          color={colors.blues.lighter}
          size={'MD'}
        >
          seu inglês
        </ShadowText>
        <ShadowText
          variation={'Heading'}
          color={colors.blues.lighter}
          size={'SM'}
        >
          com apredizado humano
        </ShadowText>
      </LeftAlignedText>
    </Container>
  );
};

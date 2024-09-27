import React from 'react';
import { colors } from '@styles/colors';
import { Container, LeftAlignedText, ShadowText } from './styles';

export const FirstPage = () => {
  return (
    <Container>
      <ShadowText
        variation={'Heading'}
        color={colors.blues.lighter}
        size={'XXL'}
      >
        Vivências
      </ShadowText>
      <LeftAlignedText>
        <ShadowText variation={'Heading'} color={colors.reds.main} size={'MD'}>
          e práticas
        </ShadowText>
        <ShadowText variation={'Heading'} color={colors.reds.main} size={'SM'}>
          online
        </ShadowText>
      </LeftAlignedText>
    </Container>
  );
};

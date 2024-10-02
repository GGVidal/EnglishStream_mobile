import TextApp from '@atoms/TextApp';
import { colors } from '@styles/colors';

import React from 'react';
import { CardQuote } from './components/CardQuote';
import { FeedContainer, ContainerContent, SpacingTop } from './styles';
import { CardClass } from '@organism/CardClass';

export const Feed = () => {
  return (
    <>
      <FeedContainer>
        <TextApp variation={'Heading'} color={colors.blues.soft} size={'XS'}>
          Hi, Steve
        </TextApp>

        <SpacingTop>
          <TextApp
            variation={'Subtitle'}
            color={colors.blues.lighter}
            size={'LG'}
          >
            You have 2 class credits to use until 10/08
          </TextApp>
        </SpacingTop>

        <SpacingTop>
          <TextApp variation={'Subtitle'} color={colors.reds.main} size={'LG'}>
            1 class scheduled for tomorrow 13pm
          </TextApp>
        </SpacingTop>
      </FeedContainer>
      <ContainerContent>
        <CardQuote />
        <CardClass />
      </ContainerContent>
    </>
  );
};

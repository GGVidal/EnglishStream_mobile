import React, { useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';
import TextApp from '@atoms/TextApp';
import { colors } from '@styles/colors';
import { CardQuote } from './components/CardQuote';
import { FeedContainer, ContainerContent, SpacingTop } from './styles';
import { CardClass } from '@organism/CardClass';
import { DefaultList } from '@molecules/DefaultList';

const MemoizedCardClass = React.memo(CardClass);

export const Feed = () => {
  const classData = [
    { id: '1', content: <MemoizedCardClass /> },
    { id: '2', content: <MemoizedCardClass /> },
  ];

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<{ id: string; content: JSX.Element }>) =>
      item.content,
    [],
  );

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
        <DefaultList
          data={classData}
          renderItem={renderItem}
          ListHeaderComponent={CardQuote}
        />
      </ContainerContent>
    </>
  );
};

import { SecondPage } from '@screens/Onboarding/pages/SecondPage';
import { ThirdPage } from '@screens/Onboarding/pages/ThirdPage';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { FirstPage } from '../../pages/FirstPage';
import useListItemAnimation from './hooks/useListItemAnimation';
import { AnimatedImage, Container } from './styles';

import { Props } from './types';

const ListItem = ({ item, index, x }: Props) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  const { rnImageStyle } = useListItemAnimation(index, x, SCREEN_WIDTH);

  return (
    <Container style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}>
      <AnimatedImage
        source={item.image}
        style={rnImageStyle}
        resizeMode="cover"
      />
      {index === 0 && <FirstPage />}
      {index === 1 && <SecondPage />}
      {index === 2 && <ThirdPage />}
    </Container>
  );
};

export default React.memo(ListItem);

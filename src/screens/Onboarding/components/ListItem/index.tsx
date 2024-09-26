import React from 'react';
import { useWindowDimensions } from 'react-native';
import useListItemAnimation from './hooks/useListItemAnimation';
import { AnimatedImage, AnimatedText, Container } from './styles';

import { Props } from './types';

const ListItem = ({ item, index, x }: Props) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  const { rnImageStyle, rnTextStyle } = useListItemAnimation(
    index,
    x,
    SCREEN_WIDTH,
  );

  return (
    <Container style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}>
      <AnimatedImage
        source={item.image}
        style={rnImageStyle}
        resizeMode="cover"
      />
      <AnimatedText style={rnTextStyle}>{item.text}</AnimatedText>
    </Container>
  );
};

export default React.memo(ListItem);

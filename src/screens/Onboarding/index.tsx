import React from 'react';
import { ImageURISource } from 'react-native';
import Animated, {
  useAnimatedRef,
  useSharedValue,
} from 'react-native-reanimated';
import ListItem from './components/ListItem';
import PaginationElement from './components/PaginationElement';
import Button from './components/Button';
import { useOnboarding } from './hooks/useOnboarding';
import {
  Container,
  BottomContainer,
  Pagination,
  RightButton,
  GradientOverlay,
} from './styles';
import { RenderItemProps } from './types';

const pages = [
  {
    text: '',
    image: require('../../../assets/second_page.png'),
  },
  {
    text: '',
    image: require('../../../assets/third_page.png'),
  },
  {
    text: '',
    image: require('../../../assets/forth_page.png'),
  },
];

export const Onboarding = () => {
  const flatListIndex = useSharedValue(0);
  const flatListRef =
    useAnimatedRef<
      Animated.FlatList<{ text: string; image: ImageURISource }>
    >();
  const { x, scrollHandle, onViewableItemsChanged } =
    useOnboarding(flatListIndex);

  const renderItem = ({ item, index }: RenderItemProps) => {
    return <ListItem item={item} index={index} x={x} />;
  };

  return (
    <Container>
      <Animated.FlatList
        ref={flatListRef}
        onScroll={scrollHandle}
        horizontal
        scrollEventThrottle={16}
        pagingEnabled
        data={pages}
        keyExtractor={(_, index) => index.toString()}
        bounces={false}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
      />

      <GradientOverlay colors={['transparent', '#05141D']}>
        <BottomContainer>
          <Pagination>
            <PaginationElement length={pages.length} x={x} />
          </Pagination>
          <RightButton>
            <Button
              currentIndex={flatListIndex}
              length={pages.length}
              flatListRef={flatListRef}
            />
          </RightButton>
        </BottomContainer>
      </GradientOverlay>
    </Container>
  );
};

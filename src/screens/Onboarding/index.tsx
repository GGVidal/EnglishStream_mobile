import { useCallback } from 'react';
import {
  ImageURISource,
  SafeAreaView,
  StyleSheet,
  View,
  ViewToken,
} from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import ListItem from './components/ListItem';
import PaginationElement from './components/PaginationElement';
import Button from './components/Button';

const pages = [
  {
    text: '',
    image: require('../../../assets/first_page.png'),
  },
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
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const flatListRef = useAnimatedRef<
    Animated.FlatList<{
      text: string;
      image: ImageURISource;
    }>
  >();

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      flatListIndex.value = viewableItems[0].index ?? 0;
    },
    [],
  );

  const scrollHandle = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const renderItem = useCallback(
    ({
      item,
      index,
    }: {
      item: { text: string; image: ImageURISource };
      index: number;
    }) => {
      return <ListItem item={item} index={index} x={x} />;
    },
    [x],
  );

  return (
    <View style={styles.container}>
      {/* FlatList for the pages */}
      <Animated.FlatList
        ref={flatListRef}
        onScroll={scrollHandle}
        horizontal
        scrollEventThrottle={16}
        pagingEnabled={true}
        data={pages}
        keyExtractor={(_, index) => index.toString()}
        bounces={false}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
      />

      {/* Overlay Pagination and Button */}
      <View style={styles.overlayContainer}>
        <PaginationElement length={pages.length} x={x} />
        <Button
          currentIndex={flatListIndex}
          length={pages.length}
          flatListRef={flatListRef}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlayContainer: {
    position: 'absolute', // Ensures elements are on top
    bottom: 30, // Adjust to your preference for positioning the pagination
    left: 0,
    right: 0,
    alignItems: 'center', // Center pagination and button horizontally
  },
});

import { useCallback } from 'react';
import { ImageURISource, StyleSheet, View, ViewToken } from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import ListItem from './components/ListItem';
import PaginationElement from './components/PaginationElement';
import Button from './components/Button';
import { LinearGradient } from 'expo-linear-gradient';

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

      <LinearGradient
        colors={['transparent', '#05141D']}
        style={styles.gradientOverlay}
      >
        <View style={styles.bottomContainer}>
          <View style={styles.pagination}>
            <PaginationElement length={pages.length} x={x} />
          </View>
          <View style={styles.rightButton}>
            <Button
              currentIndex={flatListIndex}
              length={pages.length}
              flatListRef={flatListRef}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  pagination: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  rightButton: {
    position: 'absolute',
    right: 0,
  },
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 150,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

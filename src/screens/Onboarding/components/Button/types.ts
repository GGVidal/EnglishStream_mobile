import Animated from 'react-native-reanimated';

export type Props = {
  currentIndex: Animated.SharedValue<number>;
  length: number;
  flatListRef: any;
};

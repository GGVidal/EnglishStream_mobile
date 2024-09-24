import Animated from 'react-native-reanimated';
import { ImageURISource } from 'react-native/types';

export type Props = {
  item: { text: string; image: ImageURISource };
  index: number;
  x: Animated.SharedValue<number>;
};

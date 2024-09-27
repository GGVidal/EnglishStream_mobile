import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const useButtonAnimation = (
  currentIndex: { value: number },
  length: number,
  flatListRef: React.RefObject<any>,
) => {
  const { navigate } = useNavigation();
  const rnBtnStyle = useAnimatedStyle(
    () => ({
      width:
        currentIndex.value === length - 1 ? withSpring(140) : withSpring(60),
      height: 60,
    }),
    [currentIndex, length],
  );

  const rnTextStyle = useAnimatedStyle(
    () => ({
      opacity:
        currentIndex.value === length - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            currentIndex.value === length - 1 ? withTiming(0) : withTiming(100),
        },
      ],
    }),
    [currentIndex, length],
  );

  const imageAnimatedStyle = useAnimatedStyle(
    () => ({
      opacity:
        currentIndex.value !== length - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            currentIndex.value !== length - 1 ? withTiming(0) : withTiming(100),
        },
      ],
    }),
    [currentIndex, length],
  );

  const onPress = useCallback(() => {
    if (currentIndex.value === length - 1) {
      navigate('Login');
    } else {
      flatListRef?.current?.scrollToIndex({
        index: currentIndex.value + 1,
      });
    }
  }, [currentIndex, flatListRef, length]);

  return { rnBtnStyle, rnTextStyle, imageAnimatedStyle, onPress };
};

export default useButtonAnimation;

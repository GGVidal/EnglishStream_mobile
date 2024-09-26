import {
  useAnimatedStyle,
  Extrapolation,
  interpolate,
  interpolateColor,
} from 'react-native-reanimated';

const usePaginationAnimation = (
  index: number,
  x: { value: number },
  SCREEN_WIDTH: number,
) => {
  const itemRnStyle = useAnimatedStyle(() => {
    const width = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [20, 10, 20],
      Extrapolation.CLAMP,
    );

    const bgColor = interpolateColor(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      ['#7C2626', '#C93435', '#7C2626'],
    );

    return {
      width,
      backgroundColor: bgColor,
    };
  }, [index, x]);

  return itemRnStyle;
};

export default usePaginationAnimation;

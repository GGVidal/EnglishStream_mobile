import { View, useWindowDimensions, StyleSheet } from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Props } from './types';

const ListItem = ({ item, index, x }: Props) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  const rnImageStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, 100],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    return {
      opacity,
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      position: 'absolute',
      transform: [{ translateY }],
    };
  }, [index, x]);

  const rnTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, 100],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    return {
      opacity,
      transform: [{ translateY }],
    };
  }, [index, x]);

  return (
    <View
      style={[
        styles.itemContainer,
        { width: SCREEN_WIDTH, height: SCREEN_HEIGHT },
      ]}
    >
      <Animated.Image
        source={item.image}
        style={rnImageStyle}
        resizeMode="cover" // Ensures it covers the entire background
      />

      {/* Foreground content */}
      <Animated.Text style={[styles.textItem, rnTextStyle]}>
        {item.text}
      </Animated.Text>
    </View>
  );
};

export default React.memo(ListItem);

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // Center the text in the middle
    overflow: 'hidden', // Hide anything that goes outside the screen
  },
  textItem: {
    fontWeight: '600',
    lineHeight: 41,
    fontSize: 34,
    color: 'white', // Text color to contrast with the background image
  },
});

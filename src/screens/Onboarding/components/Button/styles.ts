import { Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const AnimatedPressable = styled(
  Animated.createAnimatedComponent(Pressable),
)`
  flex-direction: row;
  padding-horizontal: 24px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const TextStyled = styled(Animated.Text)`
  color: white;
  position: absolute;
  font-weight: 600;
  font-size: 16px;
`;

export const ImageStyled = styled(Animated.Image)`
  width: 24px;
  height: 24px;
  position: absolute;
`;

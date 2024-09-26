import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const AnimatedImage = styled(Animated.Image)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const AnimatedText = styled(Animated.Text)`
  z-index: 1;
  font-weight: 600;
  line-height: 41px;
  font-size: 34px;
  color: white;
  text-align: center;
  position: absolute;
`;

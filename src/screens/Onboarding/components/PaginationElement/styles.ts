import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Item = styled(Animated.View)`
  width: 35px;
  height: 10px;
  border-radius: 5px;
  margin-horizontal: 5px;
`;

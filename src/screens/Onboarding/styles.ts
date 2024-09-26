import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
`;

export const BottomContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-horizontal: 16px;
`;

export const Pagination = styled.View`
  position: absolute;
  left: 0;
  right: 0;
`;

export const RightButton = styled.View`
  position: absolute;
  right: 0;
`;

export const GradientOverlay = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 150px;
  justify-content: center;
  padding-horizontal: 16px;
`;

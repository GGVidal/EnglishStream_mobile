import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  height: 100%;
  width: 100%;
`;

export const BottomContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-horizontal: 16px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 40%;
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
  height: 20%;
  justify-content: center;
`;

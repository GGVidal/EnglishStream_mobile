import styled from 'styled-components/native';
import { View, Image } from 'react-native';
import { colors } from '@styles/colors';
import { HeaderContainerProps } from './types';

export const HeaderContainer = styled(View)<HeaderContainerProps>`
  background-color: ${colors.blues.dark};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 4%;
  padding-top: 10%;
  height: ${({ height }) => height}px;
`;

export const LeftContainer = styled(View)`
  flex: 1;
  align-items: flex-start;
`;

export const LogoContainer = styled(View)`
  flex: 2;
  align-items: center;
`;

export const RightContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Logo = styled(Image)`
  height: 40px;
  width: 120px;
`;

export const IconSize = styled.View`
  height: 24px;
  width: 24px;
`;

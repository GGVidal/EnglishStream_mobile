import styled from 'styled-components/native';
import { theme } from '@styles/theme';
import { colors } from '@styles/colors';

export const Container = styled.View`
  flex: 1;
  margin-horizontal: ${theme.spacings.xxs}px;
`;

export const HeaderContainer = styled.View`
  margin-top: ${theme.spacings.xxxs}px;
  margin-bottom: ${theme.spacings.xxxs}px;
`;

export const AddClassButton = styled.TouchableOpacity`
  padding: 50px 120px;
  border-radius: ${theme.border.radius.sm}px;
  border: 3px solid #c7cfde;
  justify-content: center;
  align-items: center;
  background-color: #dce2ee;
`;

export const AddClassContainer = styled.View``;

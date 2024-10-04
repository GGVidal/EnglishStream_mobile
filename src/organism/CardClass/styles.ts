import styled from 'styled-components/native';
import { colors } from '@styles/colors';
import { theme } from '@styles/theme';

export const StyledFlatList = styled.FlatList`
  padding-bottom: ${theme.spacings.xs}px;
`;

export const CardContainer = styled.View`
  background-color: ${colors.white};
  padding-top: ${theme.spacings.xs}px;
  padding-left: ${theme.spacings.xs}px;
  padding-bottom: ${theme.spacings.xxs}px;
  padding-right: ${theme.spacings.xxxs}px;
  border-radius: ${theme.border.radius.sm}px;
  margin-bottom: ${theme.spacings.sm}px;
`;

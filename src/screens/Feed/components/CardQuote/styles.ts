import styled from 'styled-components/native';
import { colors } from '@styles/colors';
import { theme } from '@styles/theme';

export const CardContainer = styled.View`
  margin-horizontal: ${theme.spacings.xxs}px;
  background-color: ${colors.white};
  border-radius: ${theme.border.radius.sm}px;
  margin-top: ${theme.spacings.xxs}px;
`;

export const ContentContainer = styled.View`
  margin-horizontal: ${theme.spacings.xxs}px;
  margin-top: ${theme.spacings.xxxs}px;
`;

export const SpacingBottom = styled.View`
  margin-bottom: ${theme.spacings.xs}px;
`;

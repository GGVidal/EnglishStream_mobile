import { colors } from '@styles/colors';
import { theme } from '@styles/theme';
import Button from '@atoms/Button';
import styled from 'styled-components/native';

export const CardContainer = styled.View`
  background-color: ${colors.white};
  padding-top: ${theme.spacings.xs}px;
  padding-left: ${theme.spacings.xs}px;
  padding-bottom: ${theme.spacings.xxs}px;
  padding-right: ${theme.spacings.xxxs}px;
  border-radius: ${theme.border.radius.sm}px;
`;

export const StyledButton = styled(Button)`
  margin-top: ${theme.spacings.xs}px;
`;

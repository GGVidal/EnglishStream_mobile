import { theme } from '@styles/theme';
import { colors } from '@styles/colors';
import styled from 'styled-components/native';

export const CardContainer = styled.View`
  background-color: ${colors.white};
  padding: ${theme.spacings.nano}px;
  border-radius: ${theme.border.radius.sm}px;
  overflow: hidden;
`;

export const CardRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextContainer = styled.View`
  margin-left: ${theme.spacings.quarck}px;
  margin-vertical: ${theme.spacings.quarck}px;
  flex: 1;
  max-width: 80%;
`;

export const TextWrapper = styled.View`
  margin-left: ${theme.spacings.quarck}px;
`;

export const ChipContainer = styled.View`
  flex-direction: row;
  margin-top: ${theme.spacings.xxxs}px;
  margin-bottom: ${theme.spacings.quarck}px;
  justify-content: flex-start;
  align-items: center;
  gap: ${theme.spacings.quarck}px;
`;

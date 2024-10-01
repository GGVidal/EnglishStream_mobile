import styled from 'styled-components/native';
import { colors } from '@styles/colors';
import { theme } from '@styles/theme';

export const FeedContainer = styled.View`
  background-color: ${colors.blues.semiDark};
  padding: ${theme.spacings.xxs}px ${theme.spacings.sm}px
    ${theme.spacings.nano}px;
`;

export const SpacingTop = styled.View`
  margin-top: ${theme.spacings.quarck}px;
`;

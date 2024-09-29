import styled, { css } from 'styled-components/native';
import { theme } from '@styles/theme';

import ExternalLink from '../../../assets/icons/external-link.svg';
import { colors } from '@styles/colors';
import { ExternalProps, TextProps } from './types';
import TextApp from '@atoms/TextApp';

export const Text = styled(TextApp)<TextProps>`
  text-decoration: underline;
  text-decoration-color: ${({ color, disabled }) =>
    disabled ? colors.status.disabled.primary : color};
  color: ${({ color, disabled }) =>
    disabled ? colors.status.disabled.primary : color};
  ${({ position }) => {
    if (position === 'left') {
      return css`
        margin-left: ${theme.spacings.quarck}px;
      `;
    } else {
      return css`
        margin-right: ${theme.spacings.quarck}px;
      `;
    }
  }}
`;

export const Container = styled.View`
  flex-direction: row;
`;

export const Touch = styled.Pressable``;

export const Icon = styled(ExternalLink).attrs<ExternalProps>(
  ({ color, disabled }) => ({
    width: 16,
    height: 16,
    fill: disabled ? colors.status.disabled.primary : color && color,
  }),
)``;

import styled, { css } from 'styled-components/native';

import MainText from '../TextApp';
import { theme } from '@styles/theme';
import {
  ButtonSize,
  ContainerButtonProps,
  LabelProps,
  MainContainerProps,
} from './types';
import { colors } from '@styles/colors';
import {
  getBorderRadiusIcon,
  renderBySize,
  renderMarginIconBySize,
} from './Button.helpers';

export const ContainerButton = styled.TouchableHighlight.attrs<MainContainerProps>(
  ({ pressedColor }) => ({ underlayColor: pressedColor }),
)<ContainerButtonProps>`
  border-radius: ${({ isIconButton, iconShape }) =>
    iconShape && isIconButton
      ? getBorderRadiusIcon(iconShape, isIconButton)
      : theme.border.radius.pill}px;
  background-color: ${({ mainColor }) => mainColor};
  align-items: center;
  flex-direction: row;
  justify-content: center;
  ${({ size, isIconButton }) => renderBySize(size, isIconButton)}
  ${({ mode }) => {
    if (mode === 'text') {
      return css`
        background-color: transparent;
      `;
    }

    if (mode === 'outlined') {
      return css`
        background-color: transparent;
        border-width: 1px;
      `;
    }
  }};

  ${({ disabled, mode }) => {
    if (disabled && mode === 'filled') {
      return css`
        border-color: ${colors.status.disabled.primary};
        background-color: ${colors.status.disabled.primary};
      `;
    }

    if (disabled && mode === 'outlined') {
      return css`
        border-color: ${colors.status.disabled.primary};
      `;
    }
  }};
`;

export const IconContainer = styled.View<{ alignIcon: string }>`
  ${({ alignIcon }) => alignIcon && renderMarginIconBySize(alignIcon)}
`;

export const IconButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Label = styled(MainText)<LabelProps>`
  text-align: center;
  color: ${({ mode, color }) => {
    if (mode === 'filled') {
      return colors.white;
    }

    return color;
  }};

  font-size: ${({ size }) =>
    size === ButtonSize.XL
      ? theme.font.sizes.xs
      : size === ButtonSize.LG
        ? theme.font.sizes.xxs
        : size === ButtonSize.MD
          ? theme.font.sizes.xxxs
          : theme.font.sizes.mini}px;

  ${({ mode, pressed }) => {
    if (mode === 'text' && !pressed) {
      return css`
        text-decoration-line: underline;
      `;
    }
  }};

  ${({ disabled, mode }) => {
    if (disabled) {
      return css`
        color: ${mode !== 'filled'
          ? colors.status.disabled.primary
          : colors.neutral.lnk.disabled};
      `;
    }
  }};
`;

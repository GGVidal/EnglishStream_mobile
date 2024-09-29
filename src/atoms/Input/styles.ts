import { Animated, Platform, TouchableWithoutFeedback } from 'react-native';
import styled, { css } from 'styled-components/native';
import { theme } from '@styles/theme';

import { colors } from '@styles/colors';
import {
  InputSize,
  PropsContainer,
  PropsIconContent,
  PropsInput,
  PropsLabel,
  PropsHelper,
  SizeType,
} from './types';
import TextApp from '../TextApp';

export const Wrapper = styled(TouchableWithoutFeedback)``;

export const Container = styled.View<PropsContainer>`
  flex-direction: row;
  align-items: center;
  border-radius: ${theme.border.radius.sm}px;
  background-color: ${({ state }) =>
    state === 'Default' ? colors.white : colors.neutral.cloud.light};
  ${({ color, hasError, disabled, isHighlighted }) => {
    if (hasError) {
      return css`
        border-width: 2px;
        border-color: ${colors.status.error.primary};
      `;
    } else if (disabled) {
      return css`
        border-width: 2px;
        border-color: ${colors.status.disabled.primary};
      `;
    } else {
      return css`
        border-width: ${isHighlighted || hasError ? 2 : 1}px;
        border-color: ${colors.neutral.lnk.light};
      `;
    }
  }}
`;

export const Content = styled.View``;

export const LabelContainer = styled(Animated.View)<PropsLabel>`
  z-index: 1;
  position: absolute;
  margin-left: ${({ size }) =>
    size === InputSize.medium ? theme.spacings.xxs : theme.spacings.xxxs}px;
  padding: 0 ${theme.spacings.quarck}px;
  ${({ value, disabled, state, isHighlighted }) => {
    if (!value && disabled) {
      return css`
        background-color: transparent;
      `;
    } else if (state === 'Autofilled' && !isHighlighted) {
      return css`
        background-color: ${colors.neutral.cloud.light};
      `;
    } else {
      return css`
        background-color: ${colors.white};
      `;
    }
  }}
`;

export const Label = styled(TextApp)<PropsLabel>`
  ${({ hasError, disabled, isHighlighted }) => {
    if (hasError && isHighlighted) {
      return css`
        color: ${colors.status.error.primary};
      `;
    } else if (disabled) {
      return css`
        color: ${colors.status.disabled.primary};
      `;
    } else {
      return css`
        color: ${colors.neutral.lnk.normal};
      `;
    }
  }}
`;

export const Input = styled.TextInput.attrs(({ editable }) => ({
  placeholderTextColor: !editable
    ? colors.status.disabled.primary
    : colors.neutral.lnk.normal,
}))<PropsInput>`
  flex: 1;
  ${Platform.OS === 'web' &&
  css`
    outline-style: none;
  `}
  padding: ${({ size }) =>
    size === InputSize.medium
      ? `${theme.spacings.xxs}px`
      : `${theme.spacings.xxxs}px`};
  ${({ isHighlighted, hasError, ...props }) => {
    if (isHighlighted || hasError) {
      return css`
        color: ${colors.neutral.lnk.normal};
      `;
    } else if (!isHighlighted && props.editable) {
      return css`
        color: ${colors.neutral.lnk.light};
      `;
    } else if (!props.editable) {
      return css`
        color: ${colors.status.disabled.primary};
      `;
    }
  }}
`;

const sizeIcon = (size: SizeType) => (size === InputSize.medium ? 24 : 16);
const sizeSpacing = (size: SizeType) =>
  size === InputSize.medium ? theme.spacings.xxs : theme.spacings.xxxs;

export const LeftIconContent = styled.View<PropsIconContent>`
  margin-right: ${theme.spacings.quarck}px;
  margin-left: ${({ size }) => sizeSpacing(size)}px;
  width: ${({ size }) => sizeIcon(size)}px;
  height: ${({ size }) => sizeIcon(size)}px;
`;

export const RightIconContent = styled.View<PropsIconContent>`
  margin-left: ${theme.spacings.quarck}px;
  margin-right: ${({ size }) => sizeSpacing(size)}px;
  width: ${({ size }) => sizeIcon(size)}px;
  height: ${({ size }) => sizeIcon(size)}px;
`;

export const HelperText = styled(TextApp).attrs({
  numberOfLines: 1,
})<PropsHelper>`
  margin-top: ${theme.spacings.quarck}px;
  color: ${({ hasError }) =>
    hasError ? colors.status.error.primary : colors.neutral.lnk.normal};
  padding-horizontal: ${({ size }) =>
    size === InputSize.medium ? theme.spacings.xxs : theme.spacings.xxxs}px;
`;

export const LabelTouch = styled(TouchableWithoutFeedback)``;

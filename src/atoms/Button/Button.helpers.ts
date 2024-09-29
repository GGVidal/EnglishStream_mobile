import { css } from 'styled-components/native';
import { colors } from '@styles/colors';
import { ButtonSize } from './types';
import { theme } from '@styles/theme';

export const renderIconColor = (
  mode: string,
  mainColor: string,
  disabled: boolean,
) => {
  const { neutral, white, status } = colors;
  if ((mode === 'text' || mode === 'outlined') && mainColor && !disabled) {
    return mainColor;
  } else if (disabled) {
    return mode === 'filled' ? neutral.lnk.disabled : status.disabled.primary;
  } else {
    return white;
  }
};

export const getIconSize = (size: string) => {
  switch (size) {
    case ButtonSize.XL:
      return 24;
    case ButtonSize.LG:
      return 24;
    case ButtonSize.MD:
      return 20;
    default:
      return 16;
  }
};

export const getBorderRadiusIcon = (shape: string, isIconButton: boolean) => {
  const { circular, sm, pill } = theme.border.radius;
  if (isIconButton) {
    if (shape === 'round') return circular;
    if (shape === 'square') return sm;
  }
  return pill;
};

export const renderMarginIconBySize = (alignIcon: string) => {
  const margin = alignIcon === 'left' ? 'margin-right' : 'margin-left';
  return css`
    ${margin}: ${theme.spacings.nano}px;
  `;
};

export const renderBySize = (size: string, isIconButton?: boolean) => {
  const {
    spacings: { xxs, xs, sm, xxxs, nano },
  } = theme;

  const padding: Record<string, string> = isIconButton
    ? {
        XL: `${xxs}px`,
        LG: `${xxxs}px`,
        MD: '10px',
        SM: `${nano}px`,
      }
    : {
        XL: `${sm}px`,
        LG: `${xs}px`,
        MD: `${xs}px`,
        SM: `${xxs}px`,
      };

  const height = {
    XL: '56px',
    LG: '48px',
    MD: '40px',
    SM: '32px',
  } as Record<string, string>;

  return css`
    padding-horizontal: ${padding[size]};
    height: ${height[size]};
    width: ${isIconButton ? height[size] : 'auto'};
  `;
};

type ColorInfo = {
  mainColor: string;
  pressedColor: string;
  textColor: string;
};
export const whichColorsShouldRender = (
  colorKey: string,
  mode: string,
  pressed: boolean,
): ColorInfo => {
  const { blues } = colors;

  const colorMap: Record<
    string,
    {
      mainColor: string;
      //   pressedColor: string;
      textColor: string;
    }
  > = {
    primary: {
      mainColor: blues.main,
      //   pressedColor:
      //     mode === 'filled'
      //       ? lemon.darker
      //       : mode === 'outlined'
      //         ? lemon.light
      //         : coffee.light,
      textColor: blues.soft,
    },
    secondary: {
      mainColor: blues.soft,
      //   pressedColor: mode === 'filled' ? tangerine.darker : tangerine.light,
      textColor: mode === 'filled' ? blues.main : blues.lighter,
    },
  };

  const color = colorKey.toLowerCase();
  const colorInfo = colorMap[color];

  return colorInfo as ColorInfo;
};

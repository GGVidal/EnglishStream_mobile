import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';

import * as S from './styles';

import { ButtonProps, IconComponent } from './types';
import {
  getIconSize,
  renderIconColor,
  whichColorsShouldRender,
} from './Button.helpers';
import { colors } from '@styles/colors';

const Button = ({
  mode = 'filled',
  size = 'MD',
  color,
  loading = false,
  disabled = false,
  children,
  alignIcon = 'left',
  labelColor,
  iconSize,
  isIconButton = false,
  iconShape,
  icon: Icon,
  iconTestID,
  ...props
}: ButtonProps & { icon?: IconComponent }) => {
  const [pressed, setPressed] = useState<boolean>(false);
  const { mainColor, pressedColor, textColor } = whichColorsShouldRender(
    color,
    mode,
    pressed,
  );
  const loadingColor = mainColor;
  const iconColor = pressed ? textColor : mainColor;
  return (
    <S.ContainerButton
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      testID="container-button"
      disabled={loading || disabled}
      isIconButton={isIconButton}
      iconShape={iconShape}
      mode={mode}
      size={size}
      mainColor={mainColor}
      pressedColor={pressedColor}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          testID="loading-button"
          color={mode === 'filled' ? colors.white : loadingColor}
        />
      ) : (
        <>
          {alignIcon === 'left' && Icon && !isIconButton && (
            <S.IconContainer alignIcon="left">
              <Icon
                testID="icon-left"
                fill={renderIconColor(mode, iconColor, disabled)}
                width={getIconSize(size)}
                height={getIconSize(size)}
              />
            </S.IconContainer>
          )}
          {isIconButton && Icon && (
            <>
              <S.IconButtonContainer>
                <Icon
                  testID={iconTestID}
                  fill={renderIconColor(mode, iconColor, disabled)}
                  width={getIconSize(size)}
                  height={getIconSize(size)}
                />
              </S.IconButtonContainer>
            </>
          )}
          <S.Label
            pressed={pressed}
            testID="label-button"
            variation={'Button'}
            mode={mode}
            disabled={disabled}
            color={textColor}
            size={size}
            labelColor={labelColor || color}
          >
            {children}
          </S.Label>
          {alignIcon === 'right' && Icon && !isIconButton && (
            <S.IconContainer alignIcon="right">
              <Icon
                testID="icon-right"
                fill={renderIconColor(mode, iconColor, disabled)}
                width={getIconSize(size)}
                height={getIconSize(size)}
              />
            </S.IconContainer>
          )}
        </>
      )}
    </S.ContainerButton>
  );
};

export default Button;
export { ButtonProps };

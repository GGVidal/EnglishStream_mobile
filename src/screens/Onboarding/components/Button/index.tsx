import React from 'react';
import { AnimatedPressable, ImageStyled, TextStyled } from './styles';
import useButtonAnimation from './hooks/useButton';
import { Props } from './types';

const Button = ({ currentIndex, length, flatListRef }: Props) => {
  const { rnBtnStyle, rnTextStyle, imageAnimatedStyle, onPress } =
    useButtonAnimation(currentIndex, length, flatListRef);

  return (
    <AnimatedPressable style={rnBtnStyle} onPress={onPress}>
      <TextStyled style={rnTextStyle}>Get Started</TextStyled>
      <ImageStyled
        source={require('@assets/arrow_left.png')}
        style={imageAnimatedStyle}
      />
    </AnimatedPressable>
  );
};

export default Button;

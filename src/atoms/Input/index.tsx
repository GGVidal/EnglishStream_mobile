import React from 'react';
import { Animated, TextInput } from 'react-native';

import { forwardRef } from '../../utils/forwardRef';
import { InputProps } from './types';
import * as S from './styles';

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      color,
      size,
      state = 'Default',
      label,
      value,
      rightIcon,
      leftIcon,
      disabled,
      hasError = false,
      accessibilityLabel,
      containerProps,
      placeholder,
      isNumberInput,
      ...props
    }: InputProps,
    ref,
  ) => {
    const [isHighlighted, setIsHighlighted] = React.useState<boolean>(false);

    const handleFocus = (args?: any) => {
      if (disabled) {
        return;
      }

      setIsHighlighted(true);
      onHookFocus();

      props.onFocus?.(args);
    };

    const handleBlur = (args: any) => {
      setIsHighlighted(false);
      onHookBlur();

      props.onBlur?.(args);
    };

    const valueLabel = size === 'medium' ? 10 : 8;
    const positionLabel = size === 'medium' ? 18 : 14;
    const labelAnimation = React.useMemo(() => {
      return new Animated.Value(value ? -valueLabel : positionLabel);
    }, []);

    function onHookFocus(): void {
      Animated.timing(labelAnimation, {
        toValue: -valueLabel,
        duration: 300,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          labelAnimation.setValue(-valueLabel);
        }
      });
    }

    function onHookBlur(): void {
      if (!value) {
        Animated.timing(labelAnimation, {
          toValue: positionLabel,
          duration: 300,
          useNativeDriver: true,
        }).start(({ finished }) => {
          if (finished) {
            labelAnimation.setValue(positionLabel);
          }
        });
      }
    }

    const handleChangeText = (value: string) => {
      props.onChangeText?.(value);
    };

    React.useEffect(() => {
      if (value) onHookFocus();
    }, [value]);

    return (
      <S.Wrapper onPress={() => handleFocus()}>
        <S.Content>
          {Boolean(label) && (
            <S.LabelTouch onPress={() => !isHighlighted && handleFocus()}>
              <S.LabelContainer
                testID="container-label"
                size={size}
                value={value}
                state={state}
                disabled={disabled}
                isHighlighted={isHighlighted}
                style={{ transform: [{ translateY: labelAnimation }] }}
              >
                <S.Label
                  color={color}
                  hasError={hasError}
                  accessibilityLabel={label}
                  disabled={disabled}
                  isHighlighted={isHighlighted}
                  variation="Subtitle"
                  size={size}
                >
                  {label}
                </S.Label>
              </S.LabelContainer>
            </S.LabelTouch>
          )}
          <S.Container
            testID="container-input"
            color={color}
            hasError={hasError}
            disabled={disabled}
            isHighlighted={isHighlighted}
            state={state}
            {...containerProps}
          >
            {!!leftIcon && (
              <S.LeftIconContent
                testID="content-lefticon"
                size={size}
                color={color}
              >
                {leftIcon}
              </S.LeftIconContent>
            )}
            <S.Input
              textAlign={isNumberInput ? 'center' : 'left'}
              ref={ref}
              size={size}
              value={value}
              color={color}
              editable={!disabled}
              accessibilityLabel={accessibilityLabel}
              placeholder={!isHighlighted ? '' : placeholder}
              isHighlighted={isHighlighted}
              hasError={hasError}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChangeText={handleChangeText}
              {...props}
            />
            {!!rightIcon && (
              <S.RightIconContent
                testID="content-righticon"
                size={size}
                color={color}
              >
                {rightIcon}
              </S.RightIconContent>
            )}
          </S.Container>
        </S.Content>
      </S.Wrapper>
    );
  },
);

export default Input;
export { InputProps };

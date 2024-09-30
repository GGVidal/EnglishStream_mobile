import Button from '../Button';
import React from 'react';
import { IconButtonProps } from './types';
import { IconComponent } from '../Button/types';

const IconButton = ({
  size,
  mode,
  icon,
  color,
  iconShape = 'round',
  disabled,
  testID,
  ...props
}: IconButtonProps & { icon?: IconComponent }) => {
  return (
    <Button
      color={color}
      size={size}
      mode={mode}
      icon={icon}
      isIconButton
      iconShape={iconShape}
      disabled={disabled}
      iconTestID={testID}
      {...props}
    />
  );
};

export default IconButton;

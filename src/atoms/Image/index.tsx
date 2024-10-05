import React from 'react';
import { StyledImage } from './styles';
import { ImageComponentProps } from './types';

const ImageComponent: React.FC<ImageComponentProps> = ({
  source,
  size = 100,
  rounded = false,
  resizeMode,
}) => {
  return (
    <StyledImage
      resizeMode={resizeMode}
      source={source}
      size={size}
      rounded={rounded}
    />
  );
};

export default ImageComponent;

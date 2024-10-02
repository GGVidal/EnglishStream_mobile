import React from 'react';
import { StyledImage } from './styles';
import { ImageComponentProps } from './types';

const ImageComponent: React.FC<ImageComponentProps> = ({
  source,
  size = 100,
  rounded = false,
}) => {
  return <StyledImage source={source} size={size} rounded={rounded} />;
};

export default ImageComponent;

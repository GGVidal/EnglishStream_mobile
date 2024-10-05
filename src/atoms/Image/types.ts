import { ImageResizeMode, ImageSourcePropType, ViewProps } from 'react-native';

export interface ImageProps extends ViewProps {
  size: number;
  rounded?: boolean;
}
export interface ImageComponentProps {
  source: ImageSourcePropType;
  size?: number;
  rounded?: boolean;
  resizeMode?: ImageResizeMode;
}

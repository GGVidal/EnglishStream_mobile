import { ImageURISource } from 'react-native';

export type RenderItemProps = {
  item: { text: string; image: ImageURISource };
  index: number;
};

import { FlatListProps } from 'react-native/types';

export type DefaultListProps<ItemT> = Pick<
  FlatListProps<ItemT>,
  'data' | 'renderItem' | 'ListHeaderComponent'
>;

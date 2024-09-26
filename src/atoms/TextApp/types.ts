import * as React from 'react';
import type { StyleProp, Text, TextStyle } from 'react-native';
import { VariationTypes } from '../../styles/typesFonts';

export type Props = React.ComponentProps<typeof Text> & {
  variation: keyof typeof VariationTypes;
  style?: StyleProp<TextStyle>;
  size: 'XS' | 'SM' | 'MD' | 'LG' | 'XL' | undefined;
  color?: string;
  title?: boolean;
};

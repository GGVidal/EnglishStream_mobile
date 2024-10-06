import { Props } from '@atoms/TextApp/types';
type DirectionIcon = 'left' | 'right';

type BaseLinkProps = {
  text: string;
  position?: DirectionIcon;
  color: string;
  disabled?: boolean;
  onPress?: () => void;
};
type VariationSizeProps = Pick<Props, 'variation' | 'size'>;
export type LinkProps = BaseLinkProps & VariationSizeProps;

export type TextProps = {
  position: DirectionIcon;
  color: string;
  disabled?: boolean;
};

export type ExternalProps = {
  color: string;
  disabled?: boolean;
};

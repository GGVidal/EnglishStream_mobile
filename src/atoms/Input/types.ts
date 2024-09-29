import { TextInput, ViewProps } from 'react-native';

export type SizeType = 'medium' | 'small' | 'XS' | 'SM';
export type StateType = 'Default' | 'Autofilled';

export type InputProps = React.ComponentPropsWithRef<typeof TextInput> & {
  color: string;
  size: SizeType;
  state?: StateType;
  placeholder?: string;
  label?: string;
  value?: string | undefined;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  disabled?: boolean;
  counter?: number;
  customOnFocus?: (args?: any) => void;
  customOnBlur?: (args?: any) => void;
  accessibilityLabel?: string;
  containerProps?: ViewProps;
  hasError?: boolean;
  isNumberInput?: boolean;
};

export const enum InputSize {
  medium = 'medium',
  small = 'small',
}

export type PropsInput = {
  size: SizeType;
  color?: string;
  isHighlighted?: boolean;
  hasError?: boolean;
};

export type PropsLabel = {
  size: SizeType;
  color?: string;
  hasError?: boolean;
  disabled?: boolean;
  isHighlighted?: boolean;
  value?: string | undefined;
  state?: StateType;
};

export type PropsIconContent = {
  size: SizeType;
  color?: string;
};

export type PropsContainer = {
  hasError?: boolean;
  color?: string;
  disabled?: boolean;
  isHighlighted: boolean;
  state: StateType;
};

export type PropsHelper = {
  hasError?: boolean;
  size: SizeType;
};

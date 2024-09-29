import * as React from 'react';
import type {
  ForwardRefRenderFunction,
  PropsWithoutRef,
  RefAttributes,
  ForwardRefExoticComponent,
} from 'react';

export type ForwardRefComponent<T, P = {}> = ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
>;

export const forwardRef: <T, P = {}>(
  render: ForwardRefRenderFunction<T, P>,
) => ForwardRefComponent<T, P> = React.forwardRef;

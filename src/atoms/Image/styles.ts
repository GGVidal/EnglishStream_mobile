import styled from 'styled-components/native';
import { ImageProps } from './types';

export const StyledImage = styled.Image<ImageProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ rounded, size }) => (rounded ? size / 2 : 0)}px;
`;

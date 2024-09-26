import React, { useCallback } from 'react';
import { useWindowDimensions } from 'react-native';
import usePaginationAnimation from './hooks/usePaginationAnimation';
import { Container, Item } from './styles';
import { Props } from './types';

const PaginationElement = ({ length, x }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const PaginationComponent = useCallback(
    ({ index }: { index: number }) => {
      const itemRnStyle = usePaginationAnimation(index, x, SCREEN_WIDTH);

      return <Item style={itemRnStyle} />;
    },
    [x, SCREEN_WIDTH],
  );

  return (
    <Container>
      {Array.from({ length }).map((_, index) => (
        <PaginationComponent index={index} key={index} />
      ))}
    </Container>
  );
};

export default PaginationElement;

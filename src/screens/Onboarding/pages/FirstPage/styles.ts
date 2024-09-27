import styled from 'styled-components/native';
import TextApp from '@atoms/TextApp';

export const Container = styled.View`
  flex: 1;
  position: absolute;
  bottom: 35%;
`;

export const LeftAlignedText = styled.View`
  align-self: flex-start;
`;

export const ShadowText = styled(TextApp)`
  text-shadow-color: rgba(0, 0, 0, 0.75);
  text-shadow-offset: 2px 2px;
  text-shadow-radius: 5px;
`;

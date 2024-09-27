import styled from 'styled-components/native';
import TextApp from '@atoms/TextApp';

export const Container = styled.View`
  position: absolute;
  bottom: 20%;
`;

export const ShadowText = styled(TextApp)`
  text-shadow-color: rgba(0, 0, 0, 0.75);
  text-shadow-offset: 2px 2px;
`;

export const TextFluent = styled(ShadowText)`
  right: 5%;
`;

export const TextWith = styled(ShadowText)`
  right: 10%;
`;

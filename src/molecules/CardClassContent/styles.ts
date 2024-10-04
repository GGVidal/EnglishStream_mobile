import { Image, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '@styles/theme';
import TextApp from '@atoms/TextApp';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  margin-top: ${theme.spacings.xxs};
`;

export const StyledTextApp = styled(TextApp)`
  margin-bottom: ${theme.spacings.xxxs};
`;

export const ImageContainer = styled.View`
  margin-bottom: ${theme.spacings.nano};
`;

export const StyledImage = styled(Image)`
  width: ${width * 0.8}px;
  height: ${width * 0.3}px;
  border-radius: ${theme.border.radius.sm}px;
`;

export const ChipRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: ${theme.spacings.nano}px;
`;

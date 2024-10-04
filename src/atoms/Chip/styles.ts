import TextApp from '@atoms/TextApp';
import { theme } from '@styles/theme';
import styled from 'styled-components/native';

export const ChipContainer = styled.View<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  padding: ${theme.spacings.nano}px ${theme.spacings.xxs}px;
  border-radius: ${theme.spacings.xxs}px;
  align-items: center;
  flex-direction: row;
`;

export const ChipText = styled(TextApp)<{ textColor: string }>`
  color: ${(props) => props.textColor};
`;

export const IconWrapper = styled.View`
  margin-right: ${theme.spacings.nano}px;
  justify-content: center;
  align-items: center;
`;

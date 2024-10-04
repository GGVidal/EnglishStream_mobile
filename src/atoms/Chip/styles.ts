import TextApp from '@atoms/TextApp';
import styled from 'styled-components/native';

export const ChipContainer = styled.View<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  padding: 8px 16px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

export const ChipText = styled(TextApp)<{ textColor: string }>`
  color: ${(props) => props.textColor};
  font-size: 14px;
  font-weight: 600;
`;

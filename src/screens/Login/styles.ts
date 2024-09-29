import styled from 'styled-components/native';
import TextApp from '@atoms/TextApp';
import { theme } from '@styles/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-horizontal: ${theme.spacings.md}px;
`;

export const LabelInput = styled(TextApp)`
  align-self: flex-start;
  margin-bottom: ${theme.spacings.quarck}px;
`;

export const Title = styled(TextApp)`
  margin-vertical: ${theme.spacings.md}px;
`;

export const EmailContainer = styled.View`
  width: 70%;
`;

export const PasswordContainer = styled.View`
  width: 70%;
  margin-top: ${theme.spacings.xxxs}px;
`;

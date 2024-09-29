import styled from 'styled-components/native';
import TextApp from '@atoms/TextApp';
import { theme } from '@styles/theme';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const dynamicPaddingTop =
  height > 800 ? `${height * 0.2}px` : `${height * 0.08}px`;
const inputWidth = width > 380 ? '75%' : '90%';

export const Container = styled.SafeAreaView`
  align-items: center;
  justify-content: flex-start;
  margin-top: ${dynamicPaddingTop};
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
  width: ${inputWidth};
`;

export const PasswordContainer = styled.View`
  width: ${inputWidth};
  margin-top: ${theme.spacings.xxxs}px;
`;

export const ButtonContainer = styled.View`
  margin-vertical: ${theme.spacings.lg}px;
  width: 70%;
`;

export const SignUpContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${theme.spacings.quarck}px;
`;

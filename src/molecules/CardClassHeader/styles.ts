import styled from 'styled-components/native';
import TextApp from '@atoms/TextApp';
import { theme } from '@styles/theme';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const UserInfo = styled.View`
  margin-left: ${theme.spacings.xxs}px;
  justify-content: center;
`;

export const BulletWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${theme.spacings.quarck}px;
`;

export const ConversationText = styled(TextApp)`
  margin-top: ${theme.spacings.xxs}px;
  text-align: justify;
`;

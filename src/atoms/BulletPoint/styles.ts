import { theme } from '@styles/theme';
import styled from 'styled-components/native';

export const BulletContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${theme.spacings.quarck}px;
`;

export const Bullet = styled.View<{ dark: boolean }>`
  width: ${theme.spacings.quarck}px;
  height: ${theme.spacings.quarck}px;
  border-radius: ${theme.spacings.quarck}px;
  margin-horizontal: 2px;
  background-color: ${({ dark }) => (dark ? '#00395D' : '#86C5D8')};
`;

export const IconWrapper = styled.View`
  margin-right: ${theme.spacings.quarck}px;
  align-items: center;
  justify-content: center;
`;

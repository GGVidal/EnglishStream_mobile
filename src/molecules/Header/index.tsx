import React from 'react';
import { Dimensions, StatusBar } from 'react-native';
import * as S from './styles';
import IconButton from '@atoms/IconButton';
import Flag from '../../../assets/icons/flag.svg';
import HamburguerMenu from '../../../assets/icons/hamburguer-menu.svg';
import Help from '../../../assets/icons/help.svg';
import Profile from '../../../assets/icons/profile.svg';
import { colors } from '@styles/colors';

const { height } = Dimensions.get('window');

export const Header: React.FC = () => {
  let headerHeight: number;

  if (height < 650) {
    headerHeight = height * 0.08;
  } else if (height > 800) {
    headerHeight = height * 0.12;
  } else {
    headerHeight = height * 0.1;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.blues.dark} />
      <S.HeaderContainer height={headerHeight}>
        <S.LeftContainer>
          <IconButton
            size={'LG'}
            color="secondary"
            mode={'text'}
            icon={HamburguerMenu}
          />
        </S.LeftContainer>

        <S.LogoContainer>
          <S.Logo
            source={require('../../../assets/logo-white.png')}
            resizeMode="contain"
          />
        </S.LogoContainer>

        <S.RightContainer>
          <IconButton size={'LG'} color="secondary" mode={'text'} icon={Flag} />
          <IconButton size={'LG'} color="secondary" mode={'text'} icon={Help} />
          <IconButton
            size={'LG'}
            color="secondary"
            mode={'text'}
            icon={Profile}
          />
        </S.RightContainer>
      </S.HeaderContainer>
    </>
  );
};

export default Header;

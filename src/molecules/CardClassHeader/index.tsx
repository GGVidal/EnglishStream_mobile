import React from 'react';
import BulletPoints from '@atoms/BulletPoint';
import ImageComponent from '@atoms/Image';
import TextApp from '@atoms/TextApp';
import { colors } from '@styles/colors';
import Profile from '@assets/icons/profile.svg';
import * as S from './styles';

export const CardClassHeader = () => {
  return (
    <>
      <S.HeaderContainer>
        <ImageComponent
          source={require('@assets/test_image.png')}
          size={36}
          rounded
        />
        <S.UserInfo>
          <TextApp variation={'Body'} size={'MD'}>
            Natani
          </TextApp>
          <TextApp
            color={colors.grays.light}
            variation={'Subtitle'}
            size={'SM'}
          >
            Na agenda há 6h
          </TextApp>
          <S.BulletWrapper>
            <Profile width={12} height={12} />
            <BulletPoints />
          </S.BulletWrapper>
        </S.UserInfo>
      </S.HeaderContainer>
      <S.ConversationText variation={'Subtitle'} size={'MD'}>
        Join the conversation in order to improve your conversation skills. Add
        this class in your agenda now if you would like to attend. Your
        pre-reading and audio resources will be available soon!
      </S.ConversationText>
    </>
  );
};

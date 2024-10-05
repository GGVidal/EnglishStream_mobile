import { Chip } from '@atoms/Chip';
import TextApp from '@atoms/TextApp';
import { colors } from '@styles/colors';
import { theme } from '@styles/theme';
import React from 'react';
import * as S from './styles';
import Profile from '@assets/icons/profile_chip.svg';
import Camera from '@assets/icons/camera.svg';

export const CardClassContent = () => {
  return (
    <S.Container>
      <S.StyledTextApp variation={'Body'} size={'LG'}>
        FOR ADVANCED STUDENTS ONLY! (C1 - C2)
      </S.StyledTextApp>
      <S.ImageContainer>
        <S.StyledImage
          source={require('@assets/image-beach.png')}
          resizeMode="cover"
        />
      </S.ImageContainer>
      <TextApp variation={'Heading'} size="XS">
        😎C1 - C2 Level Conversation: Blue Zones - The secret of a longer,
        healthier life
      </TextApp>
      <S.StyledTextApp
        color={colors.grays.light}
        variation={'Button'}
        size="SM"
      >
        Wednesday, Sep 25, 1h30 - 2:00 PM -03
      </S.StyledTextApp>
      <S.ChipRow>
        <Chip
          backgroundColor={colors.grays.pale}
          textColor={'#3ca04b'}
          text={'Starts in 3 weeks'}
        />
        <Chip
          backgroundColor={colors.grays.pale}
          textColor={colors.grays.lighter}
          text={'Virtual event'}
          icon={<Camera height={16} width={16} />}
        />
        <Chip
          backgroundColor={colors.grays.pale}
          textColor={colors.grays.lighter}
          text={'10 Attendees'}
          icon={<Profile height={16} width={16} />}
        />
      </S.ChipRow>
    </S.Container>
  );
};

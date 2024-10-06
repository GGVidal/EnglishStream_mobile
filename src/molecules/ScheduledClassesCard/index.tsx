import BulletPoints from '@atoms/BulletPoint';
import ImageComponent from '@atoms/Image';
import { colors } from '@styles/colors';
import { theme } from '@styles/theme';
import React from 'react';
import { ClassesProps } from './types';
import Profile from '@assets/icons/profile.svg';
import TextApp from '@atoms/TextApp';
import { Chip } from '@atoms/Chip';
import * as S from './styles';

export const ScheduledClassesCard = ({
  classQuantity,
  date,
  imageUrl,
  title,
  chips,
}: ClassesProps) => {
  return (
    <S.CardContainer>
      <S.CardRow>
        <ImageComponent
          size={80}
          resizeMode={'cover'}
          rounded={false}
          source={require('@assets/mickey.jpeg')}
        />

        <S.TextContainer>
          <BulletPoints
            icon={<Profile width={12} height={12} />}
            quantity={classQuantity}
          />
          <S.TextWrapper>
            <TextApp
              style={{ marginTop: theme.spacings.nano }}
              color={colors.grays.light}
              variation={'Button'}
              size="SM"
            >
              {date}
            </TextApp>

            <TextApp
              style={{ marginTop: theme.spacings.quarck }}
              variation={'Body'}
              size="MD"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {title}
            </TextApp>
          </S.TextWrapper>
        </S.TextContainer>
      </S.CardRow>

      <S.ChipContainer>
        {chips.map((chip, index) => (
          <Chip
            key={index}
            backgroundColor={chip.backgroundColor}
            textColor={chip.textColor}
            text={chip.text}
            icon={chip?.icon}
          />
        ))}
      </S.ChipContainer>
    </S.CardContainer>
  );
};

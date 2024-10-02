import TextApp from '@atoms/TextApp';
import React from 'react';
import * as S from './styles';

export const CardQuote = () => {
  return (
    <S.CardContainer>
      <S.ContentContainer>
        <S.SpacingBottom>
          <TextApp variation={'Heading'} size={'XS'}>
            Bite the bullet
          </TextApp>
        </S.SpacingBottom>
        <S.SpacingBottom>
          <TextApp variation={'Subtitle'} size={'MD'}>
            That doesn’t sound too tasty does it? The idiom to bite the bullet
            actually means to force oneself to perform a painful or unpleasant
            task or to endure an unpleasant situation that is unavoidable.
          </TextApp>
        </S.SpacingBottom>

        <S.SpacingBottom>
          <TextApp variation={'Subtitle'} size={'MD'}>
            That doesn’t sound too tasty does it? The idiom to bite the bullet
            actually means to force oneself to perform a painful or unpleasant
            task or to endure an unpleasant situation that is unavoidable.
          </TextApp>
        </S.SpacingBottom>

        <S.SpacingBottom>
          <TextApp variation={'Italic'} size={'MD'}>
            “Despite his fear of needles, James decided to bite the bullet and
            get the vaccine.”
          </TextApp>
        </S.SpacingBottom>

        <S.SpacingBottom>
          <TextApp variation={'Subtitle'} size={'MD'}>
            When was the last time you had to 'bite the bullet'?
          </TextApp>
        </S.SpacingBottom>
      </S.ContentContainer>
    </S.CardContainer>
  );
};

export default CardQuote;

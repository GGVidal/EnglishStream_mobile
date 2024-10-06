import React, { useCallback } from 'react';
import TextApp from '@atoms/TextApp';
import { ScheduledClassesCard } from '@molecules/ScheduledClassesCard';
import { colors } from '@styles/colors';
import Profile from '@assets/icons/profile_chip.svg';
import Camera from '@assets/icons/camera.svg';
import { DefaultList } from '@molecules/DefaultList';
import * as S from './styles';
import { ListRenderItemInfo, View } from 'react-native';
import { ClassItem, ScheduledClass } from './types';
import Link from '@atoms/Link';

const ScheduledClassesMemo = React.memo(ScheduledClassesCard);

export const ScheduledClasses = () => {
  const maxClasses = 4;

  const classData: ScheduledClass[] = [
    {
      id: '1',
      classQuantity: 1,
      chips: [
        {
          backgroundColor: colors.grays.pale,
          textColor: '#3ca04b',
          text: 'Starts in 3 weeks',
        },
        {
          backgroundColor: colors.grays.pale,
          textColor: colors.grays.lighter,
          text: 'Virtual event',
          icon: <Camera height={16} width={16} />,
        },
        {
          backgroundColor: colors.grays.pale,
          textColor: colors.grays.lighter,
          text: '10 Attendees',
          icon: <Profile height={16} width={16} />,
        },
      ],
      date: 'Wednesday, Sep 25, 1h30 - 2:00 PM -03',
      imageUrl: '@assets/mickey.jpeg',
      title:
        '😎C1 - C2 Level Conversation: Blue Zones - The secret of a longer, healthier life',
    },
    {
      id: '2',
      classQuantity: 2,
      chips: [
        {
          backgroundColor: colors.grays.pale,
          textColor: '#3ca04b',
          text: 'Starts in 1 week',
        },
        {
          backgroundColor: colors.grays.pale,
          textColor: colors.grays.lighter,
          text: 'In-person event',
          icon: <Camera height={16} width={16} />,
        },
        {
          backgroundColor: colors.grays.pale,
          textColor: colors.grays.lighter,
          text: '5 Attendees',
          icon: <Profile height={16} width={16} />,
        },
      ],
      date: 'Thursday, Sep 26, 10:00 AM - 11:30 AM -03',
      imageUrl: '@assets/goofy.jpeg',
      title: '🤩 B2 Level Conversation: Exploring new horizons',
    },
  ];

  const remainingSlots = maxClasses - classData.length;

  const extendedClassData: ClassItem[] = [
    ...classData,
    ...Array.from({ length: remainingSlots }).map((_, index) => ({
      id: `add-class-${index}`,
      isAddClass: true,
    })),
  ];

  const renderItem = useCallback(({ item }: ListRenderItemInfo<ClassItem>) => {
    if ('isAddClass' in item) {
      return (
        <S.AddClassContainer key={item.id}>
          <S.AddClassButton>
            <Link
              text={'+ Add Class'}
              color={colors.blues.lighter}
              variation={'Button'}
              size={'MD'}
            />
          </S.AddClassButton>
        </S.AddClassContainer>
      );
    }

    return (
      <ScheduledClassesMemo
        classQuantity={item.classQuantity}
        chips={item.chips}
        date={item.date}
        imageUrl={item.imageUrl}
        title={item.title}
      />
    );
  }, []);

  return (
    <S.Container>
      <S.HeaderContainer>
        <TextApp variation={'Heading'} color={colors.blues.main} size="XS">
          Scheduled Classes
        </TextApp>
      </S.HeaderContainer>
      <DefaultList data={extendedClassData} renderItem={renderItem} />
    </S.Container>
  );
};

import BulletPoints from '@atoms/BulletPoint';
import ImageComponent from '@atoms/Image';
import { colors } from '@styles/colors';
import { theme } from '@styles/theme';
import React from 'react';
import { View } from 'react-native';
import { ClassesProps } from './types';
import Profile from '@assets/icons/profile.svg';

export const ScheduledClassesCard = ({
  classQuantity,
  date,
  imageUrl,
  title,
}: ClassesProps) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        padding: theme.spacings.nano,
        borderRadius: theme.border.radius.sm,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <ImageComponent
          size={80}
          resizeMode={'cover'}
          rounded={false}
          source={require('@assets/mickey.jpeg')}
        />
        <View>
          <BulletPoints
            icon={<Profile width={12} height={12} />}
            quantity={6}
          />
        </View>
      </View>
    </View>
  );
};

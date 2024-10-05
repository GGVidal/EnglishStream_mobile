import TextApp from '@atoms/TextApp';
import { colors } from '@styles/colors';
import { theme } from '@styles/theme';
import React from 'react';
import { View } from 'react-native';

export const ScheduledClasses = () => {
  return (
    <View
      style={{
        marginTop: theme.spacings.xxxs,
        marginHorizontal: theme.spacings.xxs,
        flex: 1,
      }}
    >
      <TextApp variation={'Heading'} color={colors.blues.main} size="XS">
        Scheduled Classes
      </TextApp>
    </View>
  );
};

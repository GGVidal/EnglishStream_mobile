import TextApp from '@atoms/TextApp';
import { ScheduledClassesCard } from '@molecules/ScheduledClassesCard';
import { colors } from '@styles/colors';
import { theme } from '@styles/theme';
import React from 'react';
import { View } from 'react-native';

export const ScheduledClasses = () => {
  return (
    <View style={{ flex: 1, marginHorizontal: theme.spacings.xxs }}>
      <View
        style={{
          marginTop: theme.spacings.xxxs,

          marginBottom: theme.spacings.xxxs,
        }}
      >
        <TextApp variation={'Heading'} color={colors.blues.main} size="XS">
          Scheduled Classes
        </TextApp>
      </View>
      <ScheduledClassesCard
        classQuantity={1}
        date=""
        imageUrl="@assets/mickey.jpeg"
        title="😎C1 - C2 Level Conversation: Blue Zones - The secret of a longer, healthier life"
      />
    </View>
  );
};

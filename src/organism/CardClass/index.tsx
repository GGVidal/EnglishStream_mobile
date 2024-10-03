import ImageComponent from '@atoms/Image';
import { CardClassHeader } from '@molecules/CardClassHeader';
import { colors } from '@styles/colors';
import { theme } from '@styles/theme';
import React from 'react';
import { View } from 'react-native';

export const CardClass = () => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        paddingTop: theme.spacings.xs,
        paddingLeft: theme.spacings.xs,
        paddingBottom: theme.spacings.xxs,
        paddingRight: theme.spacings.xxxs,
        borderRadius: theme.border.radius.sm,
      }}
    >
      <CardClassHeader />
    </View>
  );
};

import ImageComponent from '@atoms/Image';
import { theme } from '@styles/theme';
import React from 'react';
import { View } from 'react-native';

export const CardClass = () => {
  return (
    <View style={{}}>
      <ImageComponent
        source={require('../../../assets/test_image.png')}
        size={36}
        rounded
      />
    </View>
  );
};

import TextApp from '@atoms/TextApp';
import { theme } from '@styles/theme';
import React from 'react';
import { Image, View, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const CardClassContent = () => {
  return (
    <View style={{ marginTop: theme.spacings.xxs }}>
      <TextApp
        style={{ marginBottom: theme.spacings.xxxs }}
        variation={'Body'}
        size={'LG'}
      >
        FOR ADVANCED STUDENTS ONLY! (C1 - C2)
      </TextApp>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/image-beach.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <TextApp variation={'Heading'} size="XS">
        😎C1 - C2 Level Conversation: Blue Zones - The secret of a longer,
        healthier life
      </TextApp>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: theme.spacings.nano,
  },
  image: {
    width: width * 0.8,
    height: width * 0.3,
    borderRadius: theme.border.radius.sm,
  },
});

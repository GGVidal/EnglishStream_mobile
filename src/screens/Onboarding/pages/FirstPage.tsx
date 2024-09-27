import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextApp from '../../../atoms/TextApp';
import { colors } from '../../../styles/colors';

export const FirstPage = () => {
  return (
    <View style={styles.container}>
      <TextApp
        variation={'Heading'}
        color={colors.blues.lighter}
        size={'XXL'}
        style={styles.shadowText}
      >
        Vivências
      </TextApp>
      <View style={styles.leftAlignedText}>
        <TextApp
          style={[styles.leftAlignedText, styles.shadowText]}
          variation={'Heading'}
          color={colors.reds.main}
          size={'MD'}
        >
          e práticas
        </TextApp>
        <TextApp
          variation={'Heading'}
          style={[styles.leftAlignedText, styles.shadowText]}
          color={colors.reds.main}
          size={'SM'}
        >
          online
        </TextApp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: '35%',
  },
  leftAlignedText: {
    alignSelf: 'flex-start',
  },
  shadowText: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});

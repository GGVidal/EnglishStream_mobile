import React from 'react';
import { View, Dimensions, StatusBar, StyleSheet } from 'react-native';
import TextApp from '@atoms/TextApp';
import { colors } from '@styles/colors';

// Get screen dimensions
const { height } = Dimensions.get('window');

export const Header = () => {
  // Define dynamic height based on screen size
  let headerHeight;

  if (height < 650) {
    // Small devices (e.g., iPhone SE)
    headerHeight = height * 0.1; // 10% for smaller screens
  } else if (height > 800) {
    // Large devices (e.g., iPhone 15)
    headerHeight = height * 0.14; // 14% for larger screens
  } else {
    // Medium-sized devices
    headerHeight = height * 0.12; // 12% for medium-sized screens
  }

  return (
    <>
      {/* Set StatusBar icons to white */}
      <StatusBar barStyle="light-content" backgroundColor={colors.blues.dark} />
      <View style={[styles.headerContainer, { height: headerHeight }]}>
        <TextApp variation={'Heading'} size={'XS'}>
          My header
        </TextApp>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.blues.dark,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export default Header;

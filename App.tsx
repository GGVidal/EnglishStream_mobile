import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from '@routes/navigator';
import * as SplashScreen from 'expo-splash-screen';
import { Easing } from 'react-native-reanimated';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const loadFonts = async () => {
    await Font.loadAsync({
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Serif': require('./assets/fonts/RobotoSerif-Italic.ttf'),
    });
  };
  const [isAppReady, setAppReady] = useState(false);
  const opacity = useState(new Animated.Value(0))[0];
  const scale = useState(new Animated.Value(0.5))[0];
  const rotate = useState(new Animated.Value(0))[0];

  useEffect(() => {
    const loadResources = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          friction: 5,
          tension: 150,
          useNativeDriver: true,
        }),
        Animated.timing(rotate, {
          toValue: 1,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]).start(() => {
        SplashScreen.hideAsync();
        setAppReady(true);
      });
    };

    loadResources();
  }, []);

  useEffect(() => {
    loadFonts().then(() => setAppReady(true));
  }, []);

  const rotationInterpolate = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (!isAppReady) {
    return null;
  }

  return (
    <View style={styles.container}>
      {!isAppReady && (
        <Animated.View style={styles.splashScreen}>
          <Animated.Image
            source={require('./assets/icon.png')}
            style={[
              {
                opacity,
                transform: [{ scale }, { rotate: rotationInterpolate }],
              },
              styles.logo,
            ]}
            resizeMode="contain"
          />
          <Animated.Text style={[styles.splashText, { opacity }]}>
            Welcome to My App!
          </Animated.Text>
        </Animated.View>
      )}

      {isAppReady && (
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashScreen: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  splashText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
  },
});

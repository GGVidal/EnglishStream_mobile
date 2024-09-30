import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '@screens/Login';
import { Onboarding } from '@screens/Onboarding';
import { RootStackParamList } from './types';
import { colors } from '@styles/colors';
import { HomeTabs } from './homeNavigator';

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen
        options={{
          cardStyle: { backgroundColor: colors.white },
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
  );
};

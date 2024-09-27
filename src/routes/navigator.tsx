import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '@screens/Home';
import { Login } from '@screens/Login';
import { Onboarding } from '@screens/Onboarding';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Onboarding"
        component={Onboarding}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

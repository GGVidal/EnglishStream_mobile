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
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Onboarding"
        component={Onboarding}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.white },
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
  );
};

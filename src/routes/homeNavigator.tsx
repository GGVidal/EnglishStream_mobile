import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feed } from '@screens/Feed';
import { Classes } from '@screens/Classes';
import { Search } from '@screens/Search';
import { colors } from '@styles/colors';
import { HomeTabParamList } from './types';
import { Header } from '@molecules/Header';
import HomeTab from '@assets/icons/home_tab.svg';
import ClassesTab from '@assets/icons/classes_tab.svg';
import SearchTab from '@assets/icons/search_tab.svg';
import { theme } from '@styles/theme';

const Tab = createBottomTabNavigator<HomeTabParamList>();

export const HomeTabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: '#DCE2EE' }}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        header: () => <Header />,
        tabBarIcon: () => {
          if (route.name === 'Feed') {
            return <HomeTab />;
          } else if (route.name === 'Classes') {
            return <ClassesTab />;
          } else if (route.name === 'Search') {
            return <SearchTab />;
          }
        },
        tabBarActiveTintColor: colors.blues.main,
        tabBarInactiveTintColor: colors.grays.medium,

        tabBarStyle: {
          height: 60,
          paddingTop: theme.spacings.nano,
          backgroundColor: '#ECF3F6',
        },
      })}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Classes" component={Classes} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

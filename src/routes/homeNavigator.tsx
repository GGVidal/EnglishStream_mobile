import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from './types';

const Tab = createBottomTabNavigator<HomeTabParamList>();

export const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={<></>} />
      <Tab.Screen name="Profile" component={<></>} />
      <Tab.Screen name="Settings" component={<></>} />
    </Tab.Navigator>
  );
};

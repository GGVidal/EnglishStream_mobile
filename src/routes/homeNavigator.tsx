import { Header } from '@molecules/Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feed } from '@screens/Feed';
import { colors } from '@styles/colors';
import { HomeTabParamList } from './types';

const Tab = createBottomTabNavigator<HomeTabParamList>();

export const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Tab.Screen name="Feed" component={Feed} />
      {/* <Tab.Screen name="Profile" component={<></>} />
      <Tab.Screen name="Settings" component={<></>} /> */}
    </Tab.Navigator>
  );
};

import COLORS from '@constants/Color';
import IMAGE from '@constants/Images';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreScreen from '@screens/ExploreScreen/ExploreScreen';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import SearchScreen from '@screens/SearchScreen/SearchScreen';
import {ReactNode} from 'react';
import {Image, StyleSheet} from 'react-native';

const tabBarIcon = ({focused, color, size, route}: any): any => {
  let icon: any = '';
  switch (route.name) {
    case 'Home':
      icon = IMAGE.HOME_ICON;
      break;
    case 'Search':
      icon = IMAGE.SEARCH_ICON;
      break;
    case 'Explore':
      icon = IMAGE.EXPLORE_ICON;
      break;
    default:
      icon = IMAGE.HOME_ICON;
      break;
  }
  return (
    <Image
      resizeMode="contain"
      tintColor={focused ? COLORS.PRIMARY : COLORS.WHITE}
      source={icon}
      style={styles.iconStyle}
    />
  );
};

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    SearchScreen: SearchScreen,
    ExploreScreen: ExploreScreen,
  },
});

export default function BottomNavigator() {
  return (
    <MyTabs.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({focused, color, size}) =>
          tabBarIcon({focused, color, size, route}),
      })}>
      <MyTabs.Screen name="Home" component={HomeScreen} />
      <MyTabs.Screen name="Search" component={SearchScreen} />
      <MyTabs.Screen name="Explore" component={ExploreScreen} />
    </MyTabs.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: COLORS.SECONDARY,
  },
  iconStyle: {
    height: 20,
    width: 20,
  },
});

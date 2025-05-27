import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import React from 'react';
import NavigationKeys from './NavigationKeys';
import DetailScreen from '@screens/DetailScreen/DetailScreen';
import BottomNavigator from './BottomNavigator';

const AppStack = createStackNavigator();

export default function AppStackNavigator() {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name={NavigationKeys.HOME} component={BottomNavigator} />
    </AppStack.Navigator>
  );
}

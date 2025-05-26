import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import React from 'react';
import NavigationKeys from './NavigationKeys';

const AppStack = createStackNavigator();

export default function AppStackNavigator() {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name={NavigationKeys.HOME} component={HomeScreen} />
    </AppStack.Navigator>
  );
}

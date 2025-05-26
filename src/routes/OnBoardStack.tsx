import {createStackNavigator} from '@react-navigation/stack';
import OnBoardScreen from '@screens/OnBoardScreen/OnBoardScreen';
import React from 'react';
import NavigationKeys from './NavigationKeys';
import DetailScreen from '@screens/DetailScreen/DetailScreen';

const OnBoardStack = createStackNavigator();

export default function OnBoardStackNavigator() {
  return (
    <OnBoardStack.Navigator screenOptions={{headerShown: false}}>
      <OnBoardStack.Screen
        name={NavigationKeys.ONBOARD}
        component={OnBoardScreen}
      />
      <OnBoardStack.Screen
        name={NavigationKeys.DETAIL_SCREEN}
        component={DetailScreen}
      />
    </OnBoardStack.Navigator>
  );
}

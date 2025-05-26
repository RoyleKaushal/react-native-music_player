import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '@screens/SplashScreen/SplashScreen';
import OnBoardStackNavigator from './OnBoardStack';
import AppStackNavigator from './AppStack';
import NavigationKeys from './NavigationKeys';

const RootStack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name={NavigationKeys.SPLASH} component={SplashScreen} />
        <RootStack.Screen
          name={NavigationKeys.ONBOARD}
          component={OnBoardStackNavigator}
        />
        <RootStack.Screen
          name={NavigationKeys.APP_STACK}
          component={AppStackNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

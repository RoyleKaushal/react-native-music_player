import { createStackNavigator } from "@react-navigation/stack";
import OnBoardScreen from "@screens/OnBoardScreen/OnBoardScreen";
import React from "react";

const OnBoardStack = createStackNavigator();

export default function OnBoardStackNavigator() {
    return (
        <OnBoardStack.Navigator screenOptions={{ headerShown: false }}>
            <OnBoardStack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        </OnBoardStack.Navigator>
    );
}
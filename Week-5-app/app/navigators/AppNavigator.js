import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import StacksScreen from "../screens/StacksScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();

function AppNavigator(props) {
	return (
		<Stack.Navigator
			initialRouteName="Welcome"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="Welcome" component={WelcomeScreen} />
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Stacks" component={StacksScreen} />
		</Stack.Navigator>
	);
}

export default AppNavigator;

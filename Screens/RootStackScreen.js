import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import SplashScreen from "./SplashScreen";
import Drawer from "./DrawerContent";
import HomeScreen from "./HomeScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="HomeScreen" component={HomeScreen} />
    {/* <RootStack.Screen name ="Drawer" component={Drawer}/> */}
  </RootStack.Navigator>
);
export default RootStackScreen;

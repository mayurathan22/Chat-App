import "react-native-gesture-handler";
import React, { useContext } from "react";
import * as firebase from "firebase";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Provider, Context } from "./Context/AuthContext";
import { DrawerContent } from "./Screens/DrawerContent";
import MainTabScreen from "./Screens/MainTabScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import RootStackScreen from "./Screens/RootStackScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";

import { firebaseConfig } from "./Firebase";

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const MainNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  const { state } = useContext(Context);
  const isAuth = state.token;
  const tryAutoLogin = state.tryAutoLogin;
  return (
    <NavigationContainer>
      {isAuth && <MainNavigation />}
      {!isAuth && tryAutoLogin && <RootStackScreen />}
      {!isAuth && !tryAutoLogin && <WelcomeScreen />}
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

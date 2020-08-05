import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { DrawerContent } from "./DrawerContent";
import MainTabScreen from "./MainTabScreen";
import SettingsScreen from "./SettingsScreen";
import RootStackScreen from "./RootStackScreen";
import { Context } from "../Context/AuthContext";

const RootNavigator = () => {
  const { state } = useContext(Context);
  const Drawer = createDrawerNavigator();
  const MainNavigation = () => {
    return (
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      </Drawer.Navigator>
    );
  };

  // console.log(state);
  const token = state.token;

  return (
    <NavigationContainer>
      {token && <MainNavigation />}

      {!token && <RootNavigator />}
    </NavigationContainer>
  );
};
export default RootNavigator;

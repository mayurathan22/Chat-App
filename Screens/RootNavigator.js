import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContent } from "./DrawerContent";
import MainTabScreen from "./MainTabScreen";
import SettingsScreen from "./SettingsScreen";
import RootStackScreen from "./RootStackScreen";
import { Context } from "../Context/AuthContext";

const RootNavigator = () => {
  const { state } = useContext(Context);
  const Drawer = createDrawerNavigator();
  return (
    // <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    //   <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
    //   <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    // </Drawer.Navigator>
    <RootStackScreen />
  );
};

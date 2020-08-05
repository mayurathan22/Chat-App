import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import RootNavigator from './Screens/RootNavigator';


import { firebaseConfig } from "./Firebase";
import * as firebase from "firebase";

import { Provider } from "./Context/AuthContext";

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);



const App = () => {
  return (
   
      <Provider>
        <RootNavigator/>
      </Provider>
    
  );
};

export default App ; 

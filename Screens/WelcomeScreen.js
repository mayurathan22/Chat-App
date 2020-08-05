import React, { useContext, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { View, ActivityIndicator } from "react-native";

import { Context } from "../Context/AuthContext";

const WelcomeScreen = () => {
  const { autoLogin, authenticate } = useContext(Context);

  useEffect(() => {
    const tryLogin = async () => {
      const userdata = await AsyncStorage.getItem("userData");
      if (!userdata) {
        autoLogin();
        return;
      }
      const transformData = JSON.parse(userdata);
      const { userId, token, userName, email } = transformData;
      if (!userId || !token || !userName) {
        autoLogin();
        return;
      }
      authenticate(email, userId, userName, token);
    };
    tryLogin();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default WelcomeScreen;

import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import * as firebase from "firebase";

// const UpdateProfile = async (email, password) => {
//   const response = await fetch(
//     "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBkaEkoYdJa5LM3rqtfHjyg9s0V1hyGJtU",
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     }
//   );
//   const responsedata = await response.json();
//   console.log(responsedata);
// };

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

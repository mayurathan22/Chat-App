import React, { useState, useEffect ,useContext} from "react";

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
  Alert,

} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import MeterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import Firebaseconfig from "../Firebase";
import * as firebase from "firebase";
import HomeScreen from "./HomeScreen";
import { Context}from '../Context/AuthContext'; 

// const SignUP = async (email, username, password) => {
//   try {
//      await firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password);
    
//   } catch (e) {
//     console.log(e.code);
//     if (e.code === "auth/email-already-in-use")
//       throw new Error("the email address is used by another account ");
    
//   }
// };

const SignUpScreen = ({ navigation }) => {
  const {signup} = useContext(Context)
  const [data, setData] = React.useState({
    email: "",
    password: "",
    confirm_password: "",
    username: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const [error, seterror] = useState(null);
  const textInputChange = (val) => {
    setData({
      ...data,
      email: val,

      //check_textInputChange:true,
      //secureTextEntry:true,
      //confirm_secureTextEntry:true
    });
  };
  const userNameTextHandler = (val) => {
    setData({
      ...data,
      username: val,
    });
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,

      secureTextEntry: !data.secureTextEntry,
    });
  };
  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      Confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const signupHandler = async() => {
    seterror(null);
    try {
     await signup(data.email, data.username, data.password);
     navigation.navigate("HomeScreen");
    } catch (e) {
      seterror(e.message);
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert("An Error occured", error, [{ text: "Ok" }]);
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => textInputChange(val)}
          />
          {/* {data.check_textInputChange ?
                    <Animatable.View animation="bounceIn" >
                    <Feather
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                     </Animatable.View>
                    :null} */}
        </View>

        <Text style={[styles.text_footer, { marginTop: 20 }]}>User Name</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your User Name"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => userNameTextHandler(val)}
          />
        </View>

        <Text style={[styles.text_footer, { marginTop: 20 }]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
          />

          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="gray" size={20} />
            ) : (
              <Feather name="eye" color="gray" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <Text style={[styles.text_footer, { marginTop: 20 }]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Confirm Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handleConfirmPasswordChange(val)}
          />

          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="gray" size={20} />
            ) : (
              <Feather name="eye" color="gray" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={signupHandler}
            style={[
              styles.appButtonContainer,
              styles.signIn,
              { backgroundColor: "#01ab9d" },
            ]}
          >
            <Text style={[styles.textSign, { color: "#fff" }]}>sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.appButtonContainer,
              styles.signIn,
              { borderColor: "#01ab9d", borderWidth: 1 },
            ]}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={[styles.textSign, { color: "#009387" }]}>sign In</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
    marginTop: Platform.OS === "ios" ? 0 : -12,
  },

  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontWeight: "bold",
    fontSize: 18,

    textAlign: "center",
  },
  appButtonContainer: {
    borderRadius: 15,
    paddingVertical: 10,
    marginTop: 15,

    // width:250
  },
});

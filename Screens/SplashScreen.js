import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
  Dimensions,
  Image,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import MeterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";

const SplashScreen = ({ navigation }) => {
  // navigation -->props
  return (
    <View style={styles.container}>
      <Text></Text>
      <View style={styles.header}>
        {/* <Animatable.Image
                animation="bounceIn"
                duration="1000"
                      
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="stretch"
                /> */}
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUp">
        <Text style={styles.title}>Connect with your Gang</Text>
        <Text style={styles.text}> signin Account</Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={() => {
              navigation.navigate("SignInScreen");
            }}
          >
            {/* <LinearGradient 
                        colors={['#08d4c4','#01ab9d']}
                        style={styles.signIn}
                    >  
                        <Text style={styles.textSign}>Get started</Text>

                    </LinearGradient> */}
            <Text style={styles.textSign}>SignIn</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    backgroundColor: "transparent",
    borderRadius: 80 / 2,
  },
  title: {
    color: "#05355a",
    fontSize: 28,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    //  fontSize:'25'
  },
  appButtonContainer: {
    // elevation: 5,
    backgroundColor: "#01ab9d",
    borderRadius: 35,
    paddingVertical: 15,
    width: 120,
  },
});

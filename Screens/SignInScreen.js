import React from "react";
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
  Alert
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
//import MeterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";

import Users from '../model/users';

import { AuthContext } from "../Components/Context";

const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
      username: '',
      password: '',
      check_textInputChange: false,
      secureTextEntry: true,
      isValidUser:true,
      isValidPassword:true

  });

  const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.length !== 0) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
           // secureTextEntry:true
        });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        //secureTextEntry:false
      });
    }
  }

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 6){ 
      setData({
          ...data,
          password: val,
          isValidPassword:true
      });
    }
    else{
      setData({
        ...data,
        password: val,
        isValidPassword:false
      });
    }
  }
  const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
  }

  const loginHandle = (username, password) =>{
      signIn(username, password); 
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome !!!</Text>
      </View>

      <Animatable.View animation="fadeInUp" style={styles.footer}>

        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? 
          <Animatable.View>
            <Feather
             name="check-circle" 
             color="green"
             size={20} 
            />
            </Animatable.View>
           : null}
        </View>
         {data.isValidUser ? null :
          <Text style={{ color: "red"}}> invalid Email </Text>
         }
       
            
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <Feather
           name="lock"
           color="#05375a"
            size={20} 
          />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"       
            onChangeText={(val)=> handlePasswordChange(val)}
          />

          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ?  
              <Feather
                  name="eye-off"
                  color="gray" 
                  size={20} 
               />
             : (
              <Feather 
                  name="eye" 
                  color="gray" 
                  size={20} 
              />)
            }
          </TouchableOpacity>
        </View>
        
        {data.isValidPassword ?null :
        <Text style={{ color: "red"}}> password must be 6 characters </Text>
        }
        

        <TouchableOpacity>
          <Text style={{ color: "#009387", marginTop: 15 }}>
            Forget Password ?
          </Text>
        </TouchableOpacity>

        <View style={styles.button}>
          <TouchableOpacity
            style={[
              styles.appButtonContainer,
              styles.signIn,
              { backgroundColor: "#01ab9d" },
            ]}
          >
            <Text
              onPress={() => {
                let userToken;
                  userToken = 'vvvvvvvvvvvvv';
                  console.log('user token:', userToken);
                  loginHandle(data.username, data.password)                 
              }}
              style={[styles.textSign, { color: "#fff" }]}> sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.appButtonContainer,
              styles.signIn,
              { borderColor: "#01ab9d" ,borderWidth:1},
            ]}
            
            onPress={() => { 
              let userToken;
                userToken = 'fggkkkkk';
                console.log('user token:', userToken);
                navigation.navigate("SignUpScreen")
            }}
          >
            <Text style={[styles.textSign, { color: "#009387" }]}>sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

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
    flex: 3,
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

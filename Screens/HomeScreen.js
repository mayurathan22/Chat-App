// import React, { useState, useEffect, useCallback } from "react";
// import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
// import { GiftedChat } from "react-native-gifted-chat";
// import Firebase from "../Firebase";
// import { Header } from "react-native/Libraries/NewAppScreen";

// const HomeScreen = ({}) => {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: "Heeello developer",
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: "React Native",
//           avatar: "https://placeimg.com/140/140/any",
//         },
//       },
//     ]);
//   }, []);

//   const onSend = useCallback((messages = []) => {
//     setMessages((previousMessages) =>
//       GiftedChat.append(previousMessages, messages)
//     );
//   }, []);

//   return (
//     <View style={styles.container}>
//       {/* <Header></Header> */}
  
//     </View>
//   );
// };
// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // // alignContent: "center",
//     //alignItems: "center",
//     //justifyContent: "center",
//   },
// });

import React from 'react';
import { View,Text, Button, StyleSheet, ScrollView } from 'react-native';

const HomeScreen =({ navigation })=> {
    return (
      <View style={styles.container}>
         <Text>Details Screen </Text>
         {/* <Button title="Go to Details again....." onPress={() => navigation.push('Details')}/>
         <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
         <Button title="Go back" onPress={() => navigation.goBack()}/>
         <Button title="Go to the first screen" onPress={() => navigation.popToTop('Home')}/> */}
      </View>
    );
  };
  export default HomeScreen ;

  const styles  = StyleSheet.create({
    container :{
       flex :1,
       alignContent:'center',
       alignItems:'center',
       justifyContent: 'center'
     
    },
})

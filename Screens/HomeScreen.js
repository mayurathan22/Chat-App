import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
//import Firebase from "../Firebase";

const HomeScreen = ({}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hey",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend()}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // // alignContent: "center",
    //alignItems: "center",
    //justifyContent: "center",
  },
});

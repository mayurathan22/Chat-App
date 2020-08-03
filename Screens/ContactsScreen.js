import React from 'react';
import { View,Text, Button, StyleSheet, ScrollView } from 'react-native';

const ContactsScreen =({ navigation })=> {
    return (
      <View style={styles.container}>
        <Text>Contact Screen</Text>
        <Button
          title="click"
          onPress={() =>alert('you in contacts screen')}
        />
      </View>
    );
  }
  export default ContactsScreen ;

  const styles  = StyleSheet.create({
      container :{
         flex :1,
         alignContent:'center',
         alignItems:'center',
         justifyContent:'center'
      },
  })
import React from 'react';
import { View,Text, Button, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen =({ navigation })=> {
    return (
      <View style={styles.container}>
         <Text>Details Screen </Text>
         <Button title="Go to Details again....." onPress={() => navigation.push('Details')}/>
         <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
         <Button title="Go back" onPress={() => navigation.goBack()}/>
         <Button title="Go to the first screen" onPress={() => navigation.popToTop('Home')}/>
      </View>
    );
  };
  export default DetailsScreen ;

  const styles  = StyleSheet.create({
    container :{
       flex :1,
       alignContent:'center',
       alignItems:'center',
       justifyContent: 'center'
     
    },
})
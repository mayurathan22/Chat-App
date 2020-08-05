import React from 'react';
import { View,Text, Button, StyleSheet, ScrollView } from 'react-native';

const SettingsScreen =({ navigation })=> {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Button
          title="click"
          onPress={() =>alert('you in Settings screen')}
        />
      </View>
    );
  }
  export default SettingsScreen ;

  const styles  = StyleSheet.create({
      container :{
         flex :1,
         alignContent:'center',
         alignItems:'center',
         justifyContent:'center'
      },
  })
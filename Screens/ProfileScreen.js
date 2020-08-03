import React from 'react';
import { View,Text, Button, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen =({ navigation })=> {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button
          title="click"
          onPress={() =>alert('you in profile screen')}
        />
      </View>
    );
  }
  export default ProfileScreen ;

  const styles  = StyleSheet.create({
      container :{
         flex :1,
         alignContent:'center',
         alignItems:'center',
         justifyContent:'center'
      },
  })
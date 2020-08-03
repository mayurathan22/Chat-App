import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon from 'react-native-vector-icons/Ionicons';


import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ContactsScreen from './ContactsScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () =>(

    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{backgroundColor:'tomato'}}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'#14818e',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor:'#1f65ff',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-notifications" color={color} size={size} />
          ),
        //   tabBarBadge: 4,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:'#009387',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          tabBarLabel: 'Contacts',
           tabBarColor:'#694fad',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-contacts" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
);
export default MainTabScreen ;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
          
          headerStyle:{backgroundColor:'#14818e'} ,
          headerTintColor:'#fff',
          headerTitleStyle:{ fontWeight:'bold'}
      
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:"Homeee",
        // headerShown:true ,
        headerLeft :()=>(
          <Icon.Button name="ios-menu" size ={25} backgroundColor ="#14818e" onPress ={() => navigation.openDrawer()}></Icon.Button>
        )
  
      }} />
    </HomeStack.Navigator> 
      
     
    
  
  );
  
  const DetailsStackScreen = ({navigation}) =>( 
    <DetailsStack.Navigator screenOptions={{
         
          headerStyle:{
          backgroundColor:'#1f65ff'
          } ,
          headerTintColor:'#fff',
          headerTitleStyle:{ 
            fontWeight:'bold'
          }
      
        }}>
          <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
              headerLeft :()=>(
                <Icon.Button name='ios-menu' size ={25}
                backgroundColor ="#1f65ff" onPress ={() => navigation.openDrawer()}></Icon.Button>
              )
             }} />
    </DetailsStack.Navigator> 
  
  );
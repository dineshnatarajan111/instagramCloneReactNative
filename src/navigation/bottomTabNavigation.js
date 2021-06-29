import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import {
  Add,
  Home, Notification, Profile, Search,
} from '../screens'

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
    tabBarOptions = {{
      showLabel : false,
    }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color, size, focused }) => (
            <Icon name = "home" size = {26} color={"#000"} type = "evil-icons" />
        )
        }} 
      />
      <Tab.Screen name="search" component={Search} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Icon name = "search" size = {26} color={"#000"} type = "feather" />
        )
        }} 
      />
      <Tab.Screen name="Add" component={Add} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Icon name = "plus-square" size = {26} color={"#000"} type = "feather" />
        )
        }} 
      />
      <Tab.Screen name="Notification" component={Notification} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Icon name = "heart" size = {26} color={"#000"} type = "feather" />
        )
        }} 
      />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Icon name = "user" size = {26} color={"#000"} type = "feather" />
        )
        }} 
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
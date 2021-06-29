import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BottomTabs from './bottomTabNavigation'
import { Camera, Messaging } from '../screens';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator
    backBehavior = "initialRoute"
    initialRouteName = "BottomTab"
    tabBarOptions = {{
      style: {height :'0%'}
    }}
    >
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="BottomTab" component={BottomTabs} />
      <Tab.Screen name="Message" component={Messaging} />
    </Tab.Navigator>
  );
}

export default TopTabs;
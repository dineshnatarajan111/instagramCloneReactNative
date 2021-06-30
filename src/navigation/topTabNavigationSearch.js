import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { 
  Top,
  Accounts,
  Places,
  Tags,
} from '../screens';

const Tab = createMaterialTopTabNavigator();


const TopTabsSearch = () => {
    return (
      <Tab.Navigator
      backBehavior = "initialRoute"
      initialRouteName = "Top"
      tabBarOptions = {{
        labelStyle : {
          fontSize : 12,
        },
        style : {
          borderBottomWidth : 1,
          borderColor : "#E7E7E7"
        },
        indicatorStyle : {
          backgroundColor : "#000"
        },
      }}
      >
        <Tab.Screen name="Top" component={Top} />
        <Tab.Screen name="Accounts" component={Accounts}  />
        <Tab.Screen name="Places" component={Places}  />
        <Tab.Screen name="Tags" component={Tags}  />
      </Tab.Navigator>
    );
}

export default TopTabsSearch;
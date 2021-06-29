import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TopTabs from './topTabNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
    initialRouteName = "TopTabs"
    headerMode = "none"
    >
      <Stack.Screen name="TopTabs" component={TopTabs} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
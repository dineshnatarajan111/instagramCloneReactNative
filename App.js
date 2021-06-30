import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import SwitchNavigator from './src/navigation/switchNavigation';
import { Platform } from 'react-native';

const App = () => {
  return(
    <NavigationContainer>
      <StatusBar 
      barStyle = "dark-content"
      backgroundColor = {Platform.OS == "android" ? "#FFF" : null}
      />
      <SwitchNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
});

export default App;
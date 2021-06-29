import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import SwitchNavigator from './src/navigation/switchNavigation';

const App = () => {
  return(
    // <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <SwitchNavigator />
      </NavigationContainer>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
});

export default App;
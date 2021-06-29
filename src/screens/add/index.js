import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native'

const Add = () => {
  return(
    <SafeAreaView style={styles.container}></SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : "#FFF",
  },
});

export default Add;
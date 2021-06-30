import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native'
import {Feed, Header, Status} from '../../components'

const Home = (props) => {
  return(
    <SafeAreaView style={styles.container}>
      <Header {...props} />
      <ScrollView showsVerticalScrollIndicator = {false}>
        <Status />
        <Feed
        image = {require("../../assets/potrait.jpg")}
        potrait = {true}
        />
        <Feed 
        image = {require("../../assets/landscape.jpg")}  
        potrait = {false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : "#FFF",
  },
});

export default Home;
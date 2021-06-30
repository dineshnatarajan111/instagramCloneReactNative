import React from 'react'
import { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import {Icon} from 'react-native-elements'

const Splash = (props) => {


  useEffect(()=>{
    setTimeout(()=>{
      props.navigation.navigate("Signup");
    },3000)
  },[])


  return(
    <View style={styles.container}>
      <Image 
        source = {require("../../assets/appIcon.png")}
        style = {styles.appIcon}
      />
      <View style={styles.warning}>
        <Icon 
        name = "alert-triangle"
        type = "feather"
        size = {24}
        color = "#eed202"
        />
        <Text style={styles.warningTxt}>This is a clone for study purpose</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : "#FFF",
    justifyContent : 'center',
    alignItems : 'center',
  },
  appIcon : {
    height : 100,
    width : 100,
  },
  warning : {
    position : "absolute",
    bottom : 40,
    left : 0,
    right : 0,
    // height : 40,
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "center"
  },
  warningTxt : {
    fontSize : 15,
    color : "#eed202",
    marginHorizontal : 10,
  },
});

export default Splash;
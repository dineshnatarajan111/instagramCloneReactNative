import React, { useEffect } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import {Divider} from 'react-native-elements'

const Signup = () => {
  useEffect(()=>{
    
  },[])
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.languagepicker}></View>
      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.content}>
        <View style={styles.logoWrap}>
          <Image 
          source={require("../../assets/instagram-font.png")}
          style={styles.logo}
          />
        </View>
        <View style={styles.btns}>
          <View style={styles.fbButton}>
          </View>
          <View style={styles.orBreak}>
            <View style={styles.dividerBreak}>
              <Divider 
            />
            </View>
            <Text style={{
              fontSize: 14,
              fontWeight : "bold",
              opacity: 0.4,
              color: "#000"
            }}> OR </Text>
            <View style={styles.dividerBreak}>
              <Divider 
            />
            </View>
          </View>
          <View style={styles.signupOptions}>
            <Text style={styles.signupOptionsTxt}>Sign Up with Email Address or Phone Number</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.switcher}>
        <Text style={styles.swichInfo}>Already have an account? </Text>
        <Text style={styles.switchTxt}>Log in.</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : "#FFF",
  },
  languagepicker : {
    height : 50,
  },
  content : {
    flex : 1,
  },
  logoWrap : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
  },
  logo : {
    height : 50,
    width : 170,
    marginTop : 20,
  },
  btns : {
    height : Dimensions.get("window").height / 3.37,
    width : Dimensions.get("window").width,
    alignItems : "center",
  },
  fbButton : {
    height : 50,
    width : Dimensions.get("window").width - 40,
    borderRadius : 5,
    backgroundColor : "#0194F6"
  },
  orBreak : {
    height : 50,
    width : Dimensions.get("window").width,
    flexDirection : "row",
    justifyContent : "center",
    alignItems : "center",
  },
  dividerBreak : {
    width : Dimensions.get("window").width / 2 - 40,
  },
  signupOptions : {
    height : 40,
    justifyContent : "center",
    alignItems : "center",
  },
  signupOptionsTxt : {
    fontSize : 13,
    fontWeight : "bold",
    color : "#2096E0"
  },
  switcher : {
    height : 45,
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "center",
    borderTopWidth : 1,
    borderColor : "#E7E7E7",
  },
  swichInfo : {
    fontSize : 13,
    color : "#000",
    opacity : 0.6
  },
  switchTxt : {
    fontSize : 13,
    fontWeight : "bold",
  },
});

export default Signup;
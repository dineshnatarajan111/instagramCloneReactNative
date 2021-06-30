import React, {useEffect, useState} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import {Icon} from 'react-native-elements'

const Search = (props) => {
  useEffect(()=>{
    props.navigation.setOptions({
      gestureEnabled : false
    })
  },[])
  const [searchTxt, setSearchTxt] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <View style={{alignItems : "center", justifyContent : "center"}}>
            <Icon
            name = "search"
            type = "feather"
            size = {20}
            color = {"#000"}
            style = {{
                marginRight : 15
            }}
            />
          </View>
          <TouchableOpacity 
          onPress={()=>setModalVisible(!modalVisible)}
          style = {{
            flex : 1,
            justifyContent : "center"
          }}
          >
            <Text style = {styles.txt}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : "#FFF",
  },
  searchContainer : {
    height : 50,
    justifyContent : "center",
    paddingHorizontal : 20,
  },
  searchBar : {
    height : 35,
    backgroundColor : "#EFEFEF",
    borderRadius : 10,
    paddingHorizontal : 10,
    flexDirection : "row",
  },
  txt : {
    fontSize : 14,
    color : "#949494"
  },
});

export default Search;
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    SafeAreaView,
} from 'react-native'
import {Icon} from 'react-native-elements'

const Messaging = (props) => {
    const [searchTxt, setSearchTxt] = useState("");
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                onPress = {() => props.navigation.goBack()}
                >
                    <Icon
                    name = "arrow-left"
                    type = "feather"
                    size = {28}
                    color = {"#000"}
                    />
                </TouchableOpacity>
                <Text style={styles.hrdtxt}>Directs</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <Icon
                    name = "search"
                    type = "feather"
                    size = {20}
                    color = {"#949494"}
                    style = {{
                        marginRight : 15
                    }}
                    />
                    <TextInput 
                    style = {{
                        flex : 1,
                    }}
                    placeholder = "search"
                    placeholderTextColor = "#949494"
                    value = {searchTxt}
                    onChangeText = {(txt)=>setSearchTxt(txt)}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : "#FFF"
    },
    header : {
        height : 54,
        flexDirection : "row",
        alignItems : "center",
        paddingHorizontal : 20,
    },
    hrdtxt : {
        fontSize : 20,
        color : "#000",
        fontWeight : "bold",
        marginHorizontal : 20,
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
        alignItems : "center",
        flexDirection : "row",
    },
});

export default Messaging;
import React, { useEffect } from 'react'
import {
    View,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import {Icon} from 'react-native-elements'
import TopTabsSearch from '../../navigation/topTabNavigationSearch'


const SearchBox = (props) => {
    useEffect(()=>{
        
    },[])
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <TouchableOpacity 
                onPress = {()=>{
                    props.onchange(false);
                }}
                style={{alignItems : "center", justifyContent : "center"}}>
                    <Icon
                        name = "arrow-left"
                        type = "feather"
                        size = {20}
                        color = {"#000"}
                        style = {{
                        marginRight : 15
                    }}
                    />
                </TouchableOpacity>
                <View style={styles.searchInp}>
                    <TextInput 
                    placeholder = "Search"
                    placeholderTextColor = "#949494"
                    style = {{
                        flex : 1,
                        color : "#000",
                        fontSize : 14,
                    }}
                    autoFocus = {true}
                    />
                </View>
            </View>
            <View style = {styles.content}>
                <TopTabsSearch />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
    },
    searchContainer : {
        height : 50,
        flexDirection : "row",
        alignItems : "center",
        paddingHorizontal : 20,
    },
    searchInp : {
        height : 35,
        flex : 1,
        borderRadius : 10,
        paddingHorizontal : 10,
        backgroundColor : "#EFEFEF",
    },
    content : {
        flex : 1,
    },
})

export default SearchBox;
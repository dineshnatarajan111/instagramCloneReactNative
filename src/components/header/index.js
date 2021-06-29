import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native'
import {Icon} from 'react-native-elements'

const Header = () => {
    return(
        <View style={styles.container}>
            <Image 
            source = {require("../../assets/instagram-font.png")}
            style = {{
                height : 40,
                width : 130,
            }}
            />
            <Icon 
            name = "send"
            type = "feather"
            size={26}
            color={"#000"}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height : 54,
        width : Dimensions.get("window").width,
        borderBottomWidth : 1,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        paddingHorizontal : 20,
        borderColor : "#E7E7E7"
    },
})

export default Header;
import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'

const Header = () => {
    return(
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image 
                source = {require("../../../assets/g1.jpg")}
                style={{
                    flex : 1,
                    height : null,
                    width : null,
                    borderRadius : 30,
                }}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.txt}>G1 Avatar</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        height : 60,
        flexDirection : "row",
        alignItems : "center",
        paddingHorizontal : 20,
    },
    imgContainer : {
        height : 40,
        width : 40,
        borderRadius : 30,
    },
    infoContainer : {
        flex : 1,
        justifyContent : "center",
        paddingHorizontal : 20,
    },
    txt : {
        fontSize : 13,
        fontWeight : "bold"
    },
})

export default Header;
import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'
import {Icon} from 'react-native-elements'

const StatusCircleSelf = (props) => {
    return(
        <View style={styles.container}>
            <View style = {styles.imageBack}>
                <View style={styles.circle}>
                    <Image 
                    source = {require("../../assets/potrait.jpg")}
                    style = {{
                        flex : 1,
                        height : null,
                        width : null,
                        borderRadius : 80,
                    }}
                    />
                </View>
                <View style={styles.add} >
                    <Icon 
                    name="add"
                    size = {14}
                    // type = "feather"
                    color = "#FFF"
                    />
                </View>
            </View>
            <Text style={styles.txt}>Your Status</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height : 100,
        // width : 100,
        paddingHorizontal : 10,
        justifyContent : "center",
        alignItems : "center",
    },
    imageBack : {
        height : 60,
        width : 60,
        borderRadius : 80,
        justifyContent : "center",
        alignItems : "center",
        // backgroundColor : "red",
    },
    circle: {
        height : 50,
        width : 50,
        borderRadius : 80,
        backgroundColor : "#FFF"
    },
    add : {
        position : "absolute",
        right : 0,
        bottom : 0,
        height : 18,
        width : 18,
        borderRadius : 20,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#0000FF"
    },
    txt : {
        fontSize : 12,
        marginVertical : 5,
        // fontWeight : "bold",
    },
});

export default StatusCircleSelf;
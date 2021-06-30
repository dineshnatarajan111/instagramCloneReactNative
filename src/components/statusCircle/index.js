import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'

const StatusCircle = (props) => {
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
            </View>
            <Text style={styles.txt}>G1 Avatar</Text>
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
        backgroundColor : "red",
    },
    circle: {
        height : 50,
        width : 50,
        borderRadius : 80,
        backgroundColor : "#FFF"
    },
    txt : {
        fontSize : 12,
        marginVertical : 5,
        // fontWeight : "bold",
    },
});

export default StatusCircle;
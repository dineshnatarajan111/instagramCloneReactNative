import React from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'
import { Icon } from 'react-native-elements'

const Bottom = () => {
    return(
        <View style={styles.container}>
            <View style={styles.content1}>
                <Icon 
                name = "heart"
                type="feather"
                color={"#000"}
                size={25}
                />
                <Icon 
                name = "message-circle"
                type="feather"
                color={"#000"}
                size={25}
                style={{
                    transform : [{scaleX: -1}],
                    marginHorizontal : 15,
                }}
                />
                <Icon 
                name = "send"
                type="feather"
                color={"#000"}
                size={25}
                />
            </View>
            <View style={styles.content2}>
                <Icon 
                name = "bookmark"
                type="feather"
                color={"#000"}
                size={25}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height : 60,
        flexDirection : "row",
        paddingHorizontal : 20,
        alignItems : "center",
    },
    content1 : {
        flex : 1,
        flexDirection : "row"
    },
    content2 : {
        flex : 1,
        flexDirection : "row",
        justifyContent : "flex-end",
    },
})

export default Bottom;
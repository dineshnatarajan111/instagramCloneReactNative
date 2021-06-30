import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native'
import StatusCircle from '../statusCircle'
import StatusCircleSelf from '../statusCircleSelf'

const Status = () => {
    return(
        <ScrollView 
        style={styles.container}
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        >
            <StatusCircleSelf />
            <StatusCircle />
            <StatusCircle />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection : "row",
        borderBottomWidth : 0.7,
        borderColor : "#E7E7E7",
    },
});

export default Status;
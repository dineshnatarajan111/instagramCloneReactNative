import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native'

const Messaging = () => {
    return(
        <SafeAreaView style={styles.container}></SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
    },
});

export default Messaging;
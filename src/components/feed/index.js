import React from 'react'
import {
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet
} from 'react-native'
import Header from './header'
import Bottom from './bottom'

const Feed = (props) => {
    return(
        <View style={styles.container}>
            <Header />
            <View style={{
                height : props.potrait ? 6 * Dimensions.get('window').width / 5 : 4 * Dimensions.get('window').width / 6
            }}>
                <Image 
                source = {props.image}
                style={{
                    flex :1,
                    height : null,
                    width : null,
                }}
                />
            </View>
            <Bottom />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    content: {
        height : 2 * Dimensions.get('window').width / 3,
    }
});

export default Feed;
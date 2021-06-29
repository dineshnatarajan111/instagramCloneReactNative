import React,{useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native'
import { RNCamera } from 'react-native-camera';

const Camera = () => {
    const [cameraRef,setCameraRef] = useState(null);
    return(
        <View style={styles.container}>
            <RNCamera
            ref={ref => {
                setCameraRef(ref);
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
    },
    preview : {
        flex : 1,
    }
});

export default Camera;
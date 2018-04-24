import React, { Component } from "react";
import { Platform, AppRegistry, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { RNCamera } from "react-native-camera";

export default class Camera extends React.Component {

    constructor ( props ) {
        super ( props );
    }

    static navigationOptions = {
        title: 'Camera',
    };

    handleCapturePhoto = async() => {
        try {
            const options = { quality: 0.5, base64: true };
            const cameraData = await this.camera.takePictureAsync(options)
            console.log(cameraData.uri);
            params.updateUri(data.uri)
            this.props.navigation.goBack(null);
        } catch (e) {
            // This logs the error
            console.log(e)
            //this.props.navigation.goBack(null);
        }
     }

    render () {
        const { navigation } = this.props;
        const { params } = navigation.state;
        return (
            <View style = {{ flex: 1, flexDirection: 'column', backgroundColor: 'black'}}>
                <View style = { styles.body }>

                   <RNCamera
                       ref={ref => {
                           this.camera = ref;
                       }}
                       style={styles.preview}
                       type={RNCamera.Constants.Type.back}
                       flashMode={RNCamera.Constants.FlashMode.on}
                       permissionDialogTitle={"Permission to use camera"}
                       permissionDialogMessage={
                           "We need your permission to use your camera phone"
                       }
                   />
                   <TouchableOpacity
                       onPress={this.handleCapturePhoto.bind(this)}
                       style={styles.capture}
                   >
                       <Text style={{ fontSize: 14 }}> SNAP </Text>
                   </TouchableOpacity>

                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create ({
    header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    body: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'flex-start',
        justifyContent: 'center',
    },
    preview: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    capture: {
        flex: 0,
        backgroundColor: "gray",
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: "center",
        margin: 20
    }
});
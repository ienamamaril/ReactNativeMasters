import React, { Component } from "react";
import { Platform, AppRegistry, StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { RNCamera } from "react-native-camera";

export default class CapturePhoto extends React.Component {

    constructor ( props ) {
        super ( props );
        this.state = { };
    }

    static navigationOptions = {
        title: 'S M I L E',
    };

    takePicture = async function() {
        const { params } = this.props.navigation.state;
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options)
          console.log(data.uri);
          params.updateUri(data.uri)
          this.props.navigation.goBack(null);
        }
    };

    render () {
        return (
            <View style = {{ flex: 1, flexDirection: 'column', backgroundColor: 'black', padding: 10 }}>
                <View style = { styles.body }>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                    style = {styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                    />
                    <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
                        <TouchableOpacity
                            onPress={this.takePicture.bind(this)}
                            style = {styles.capture}
                        >
                            <Text style={{fontSize: 14}}> SNAP SNAP </Text>
                        </TouchableOpacity>
                    </View>
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
        flex: 2,
        alignItems: 'center',
        alignContent: 'flex-start',
        justifyContent: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: 'gray',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    },
    footer: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 20,
    },
    button: {
        fontWeight: 'bold',
        fontSize: 10
    }
});
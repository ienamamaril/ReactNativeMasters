import React, { Component } from "react";
import { Platform, AppRegistry, StyleSheet, View, Text, Button } from 'react-native';
import { RNCamera } from "react-native-camera";

export default class Camera extends React.Component {

    constructor ( props ) {
        super ( props );
        this.state = { state: '' };
    }

    static navigationOptions = {
        title: 'Camera',
    };

    render () {
        return (
            <View style = {{ flex: 1, flexDirection: 'column', backgroundColor: 'black', padding: 10 }}> 
                <View style = { styles.body }>
                    <Text style = { styles.header }>Welcome!</Text>
                    
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
import React, { Component } from "react";
import { Platform, AppRegistry, StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default class Main extends React.Component {

    static navigationOptions = {
        title: 'Home',
    };

    render () {
        const { navigation } = this.props;
        const { params } = navigation.state;
        return (
            <View style = {{ flex: 1, backgroundColor: 'white', padding: 10 }}>
                <Text style = { styles.header }>Welcome!</Text>
                <Text style = { styles.header }>{ params.name }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    header: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
    }
});
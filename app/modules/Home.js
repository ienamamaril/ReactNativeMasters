import React, { Component } from "react";
import { Platform, AppRegistry, StyleSheet, View, Text, Button } from 'react-native';

export default class Home extends React.Component {

    constructor ( props ) {
        super( props );
        this.state = { state: true };
    }

    static navigationOptions = {
        title: 'Home',
    };

    showHideSecretMessage = () => { 
        if ( this.state.status == true ) {
            this.setState ({ status: false })
        }
        else {
            this.setState ({ status: true })
        }
    }

    render () {
        const { navigation } = this.props;
        const { params } = navigation.state;
        return (
            <View style = {{ flex: 1, flexDirection: 'column', backgroundColor: 'black', padding: 10 }}> 
                <View style = { styles.body }>
                    <Text style = { styles.header }>Welcome!</Text>
                    <Text style = { styles.header }>{ params.name }</Text>
                    <Button 
                        style = { styles.button }
                        onPress = { this.showHideSecretMessage } 
                        title = { this.state.status ? "hide secret message" : "show secret message"}
                        color = '#79BD42'/>
                </View>
                <View style = {{ flex: 1, alignItems: 'center', alignContent: 'flex-start', justifyContent: 'center'}}>
                    <Button 
                        style = { styles.button }
                        onPress = {() => navigation.navigate('Flatlist')} 
                        title = "L I S T O P I A"
                        color = '#79BD42'/>
                </View>
                <View style = {{ flex: 1, alignItems: 'center', alignContent: 'flex-start', justifyContent: 'center'}}>
                    { this.state.status ? <Text style = { styles.footer }>{ params.message }</Text> : null }
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
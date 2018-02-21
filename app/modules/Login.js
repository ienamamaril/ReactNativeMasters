import React, { Component } from "react";
import { Platform, AppRegistry, StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default class Login extends React.Component {

    constructor ( props ) {
        super( props );
        this.state = { text:'' };
    }

    static navigationOptions = {
        title: 'Login',
    };

    render () {
        const { navigation } = this.props;
        return (
            <KeyboardAvoidingView style = {{
                flex: 1, 
                flexDirection: 'column'}}>
                {/* <View style = {{ */}
                    {/* flex: 1, 
                    flexDirection: 'column'}}> */}

                    <View style = {{ 
                        flex: 2, 
                        backgroundColor: '#79BD42',
                        alignItems: 'center', 
                        alignContent: 'flex-start',
                        justifyContent: 'center'}}>
            
                        <Text style = { styles.header }>Magenic Masters</Text>
                        <Text style = { styles.header }>M A N I L A</Text>
                    </View>

                    <View style = {{ 
                        flex: 1,
                        backgroundColor: 'black',
                        alignItems: 'center', 
                        alignContent: 'stretch', 
                        justifyContent: 'center'}}>
            
                        <Text style = { styles.text }>Please state your </Text>
                        
                        <TextInput
                            style = {{ backgroundColor: 'white', width: 150 }}
                            placeholder = "Name"
                            onChangeText = {( text ) => this.setState ({ text })}/>

                        <Button 
                            style = { styles.button }
                            onPress = {() => navigation.navigate('Home',{ name: this.state.text, 
                                message: 'The answer to the ultimate question of life, the universe and everything is 42.' }
                            )} 
                            title = "ENTER" 
                            color = '#79BD42'/>
                    </View>
                {/* </View> */}
            </KeyboardAvoidingView>
        )
    }
}
  
  const styles = StyleSheet.create({
    header: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        fontStyle: 'italic'
    },
    text: {
        color: 'white'
    },
    button: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
  });
  
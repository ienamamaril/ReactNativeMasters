import React, { Component } from "react";
import { Platform, AppRegistry, StyleSheet, View, Text, FlatList, TouchableOpacity, 
    ScrollView, Modal, ActivityIndicator, AsyncStorage, Button } from 'react-native';

export default class Flatlist extends React.Component {

    constructor ( props ) {
        super( props );
        this.state = {
            isModalVisible: false,
            isLoading: true
        }
    }

    /*async componentDidMount () {
        return fetch('https://launchlibrary.net/1.3/agency')
        .then ((response) => response.json())
        .then ((responseJson) => 
        {
            try {
                AsyncStorage.setItem('agencies', JSON.stringify(responseJson.agencies));
                this.showAgenciesAsync();
            } catch (error) {
                // Error saving data
            }
        })
        .catch((error) => {
            console.error(error);
        })
    }*/

    async componentDidMount () {
        try {
            let response = await fetch ('https://launchlibrary.net/1.3/agency');
            if (response.status === 200) {
                let responseJson = await response.json();            
                AsyncStorage.setItem('agencies', JSON.stringify(responseJson.agencies));
                this.showAgenciesAsync();
            } else {
                this.showAgenciesAsync();
            }            
        } catch (error) {
            cosole.error(error);
        }
    }

    showAgenciesAsync() {
        AsyncStorage.getItem('agencies', (err, value) => this.setState({
            isLoading: false, 
            dataSource: JSON.parse(value)
        }
        ))
      } 

    closeModal () {
        this.setState( { isModalVisible: false });
    }

    static navigationOptions = {
        title: 'Flatlist',
    };

    render () {

        if (this.state.isLoading) {
            return (
                <View style = {{ flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View style = {{ flex: 1, flexDirection: 'column', backgroundColor: 'black', padding: 10 }}> 
                <View style = { styles.body }>
                        <Text style = { styles.header }>The Agency Family</Text>
                        <FlatList
                            data = { this.state.dataSource } 
                            renderItem = {
                                ({ item }) => 
                                <TouchableOpacity onPress = {() => this.setState({ isModalVisible: true })}>
                                    <Text style = { styles.items }>{ item.name }</Text>
                                </TouchableOpacity>
                                }
                            keyExtractor = {(item, index) => index.toString() }/>
                </View> 

                <Modal
                    visible = { this.state.isModalVisible }
                    animationType = { 'fade' }
                    onRequestClose = {() => this.closeModal()}>
                        <ScrollView style = {{ flex: 1, flexDirection: 'column', backgroundColor: 'black', padding: 10 }}> 
                            <View style = { styles.body }>
                            <Button 
                                    style = { styles.button }
                                    onPress = {() => this.closeModal() } 
                                    title = "C L O S E"
                                    color = '#79BD42'/>
                                <Text style = { styles.footer }>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis ipsum non nibh molestie maximus. Donec mollis, elit faucibus pulvinar accumsan, nibh neque posuere ligula, malesuada commodo elit neque ac lorem. Pellentesque ullamcorper dapibus sapien eu euismod. Nunc fringilla eros ut nunc porta elementum. Fusce quis libero libero. Sed luctus ac lacus et rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                    In laoreet porta iaculis. Integer id scelerisque neque. Praesent sodales, velit id laoreet laoreet, ex ex suscipit dui, a imperdiet leo justo convallis est. Pellentesque sed sodales leo, viverra rhoncus leo. Aliquam ac sagittis mi. Morbi consectetur hendrerit nisl vitae suscipit. Praesent commodo vitae diam in tincidunt. Aliquam vitae tellus eu neque condimentum efficitur id vel erat. Fusce sodales vel turpis ut malesuada. In sit amet scelerisque mauris. Ut aliquam ligula non ipsum iaculis mattis. Aenean malesuada lorem placerat eleifend ultrices.
                                    Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam at posuere odio. Fusce risus est, facilisis quis diam eget, pharetra laoreet erat. Curabitur aliquet fermentum ex, ac congue urna pretium at. Nullam a eros scelerisque, elementum nunc ut, posuere neque. Phasellus fringilla rhoncus tempus. Pellentesque blandit hendrerit metus, vel mollis neque mattis eget. Integer ut lorem ut felis scelerisque dignissim. Nulla iaculis sodales accumsan. Vestibulum sodales quam id hendrerit tempor. Curabitur facilisis, lacus non luctus commodo, mauris risus maximus neque, sit amet ultrices sapien risus sit amet est. Fusce aliquet justo at accumsan dignissim. Mauris purus ex, consectetur at iaculis a, vehicula sit amet lorem.
                                </Text>
                            </View>
                        </ScrollView>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    header: {
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 25,
        alignItems: 'center',
        alignContent: 'flex-start',
        justifyContent: 'center',
    },
    body: {
        flex: 2,
        paddingTop: 18,
        alignItems: 'center',
        alignContent: 'flex-start',
        justifyContent: 'center'
    },
    items: {
        padding: 10,
        paddingTop: 10,
        color: 'white',
        fontSize: 18,
    },
    footer: {
        color: 'gray',
        fontSize: 18,
        alignItems: 'center',
        alignContent: 'flex-start',
        justifyContent: 'center',
    },
    button: {
        fontWeight: 'bold',
        fontSize: 10
    }
});

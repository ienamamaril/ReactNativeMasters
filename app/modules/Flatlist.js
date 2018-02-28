import React, { Component } from "react";
import { Platform, AppRegistry, StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import PopupDialog, {
    DialogTitle,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    FadeAnimation,
  } from 'react-native-popup-dialog';
  import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Flatlist extends React.Component {

    constructor ( props ) {
        super( props );
        this.state = { 
            state: true,
            myText: 'I\'m ready to get swiped!',
            gestureName: 'none'        
        };
    }

    onSwipeUp ( gestureState ) {
        this.setState ({ myText: 'You swiped up!' });
    }
     
    onSwipeDown ( gestureState ) {
        this.setState ({ myText: 'You swiped down!' });
    }
    
    onSwipeLeft ( gestureState ) {
        this.setState ({ myText: 'You swiped left!' });
    }
    
    onSwipeRight ( gestureState ) {
        this.setState ({ myText: 'You swiped right!' });
    }

    onSwipe ( gestureName, gestureState ) {
        const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
        this.setState ({ gestureName: gestureName });
        switch ( gestureName ) {
        case SWIPE_UP:
            console.log('You swiped up!');
            break;
        case SWIPE_DOWN:
            console.log('You swiped down!');
            break;
        case SWIPE_LEFT:
            console.log('You swiped left!');
            break;
          case SWIPE_RIGHT:
            console.log('You swiped right!');
            break;
        }
      }

    static navigationOptions = {
        title: 'Flatlist',
    };

    render () {
        const { navigation } = this.props;

        const slideAnimation = new SlideAnimation({
            slideFrom: 'bottom',
          });

          const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
          };
          
        return (
            <View style = {{ flex: 1, flexDirection: 'column', backgroundColor: 'black', padding: 10 }}> 
                <View style = { styles.body }>
                    <GestureRecognizer
                        onSwipe = {( direction, state ) => this.onSwipe( direction, state )}
                        onSwipeUp = {(state) => this.onSwipeUp ( state )}
                        onSwipeDown = {(state) => this.onSwipeDown ( state )}
                        onSwipeLeft = {(state) => this.onSwipeLeft ( state )}
                        onSwipeRight = {( state ) => this.onSwipeRight ( state )}
                        config = { config }>
                        <Text style = { styles.header }>Most Amazing Things Built by Humans</Text>
                        {<FlatList data = {[
                                { key: 'Taj Mahal' },
                                { key: 'Great Wall of China' },
                                { key: 'Eiffel Tower' },
                                { key: 'Machu Picchu' },
                                { key: 'Mt. Rushmore' },
                                { key: 'Stonehenge' },
                                { key: 'Statue of Liberty' },
                                { key: 'Colosseum' },
                                { key: 'Forbidden City' }
                            ]}
                            renderItem = {({ item }) => 
                                <TouchableOpacity onPress={() => { this.popupDialog.show() }}> 
                                    <View>
                                        <Text style = { styles.items }>{ item.key }</Text>
                                    </View>
                                </TouchableOpacity>}/>}
                        <Text style = { styles.footer }>{ this.state.myText }</Text>
                    </GestureRecognizer>
                </View> 
                <PopupDialog
                    ref = {( popupDialog ) => { this.popupDialog = popupDialog; }} dialogAnimation = { slideAnimation }>
                    <ScrollView>
                        <View>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis ipsum non nibh molestie maximus. Donec mollis, elit faucibus pulvinar accumsan, nibh neque posuere ligula, malesuada commodo elit neque ac lorem. Pellentesque ullamcorper dapibus sapien eu euismod. Nunc fringilla eros ut nunc porta elementum. Fusce quis libero libero. Sed luctus ac lacus et rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                In laoreet porta iaculis. Integer id scelerisque neque. Praesent sodales, velit id laoreet laoreet, ex ex suscipit dui, a imperdiet leo justo convallis est. Pellentesque sed sodales leo, viverra rhoncus leo. Aliquam ac sagittis mi. Morbi consectetur hendrerit nisl vitae suscipit. Praesent commodo vitae diam in tincidunt. Aliquam vitae tellus eu neque condimentum efficitur id vel erat. Fusce sodales vel turpis ut malesuada. In sit amet scelerisque mauris. Ut aliquam ligula non ipsum iaculis mattis. Aenean malesuada lorem placerat eleifend ultrices.
                                Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam at posuere odio. Fusce risus est, facilisis quis diam eget, pharetra laoreet erat. Curabitur aliquet fermentum ex, ac congue urna pretium at. Nullam a eros scelerisque, elementum nunc ut, posuere neque. Phasellus fringilla rhoncus tempus. Pellentesque blandit hendrerit metus, vel mollis neque mattis eget. Integer ut lorem ut felis scelerisque dignissim. Nulla iaculis sodales accumsan. Vestibulum sodales quam id hendrerit tempor. Curabitur facilisis, lacus non luctus commodo, mauris risus maximus neque, sit amet ultrices sapien risus sit amet est. Fusce aliquet justo at accumsan dignissim. Mauris purus ex, consectetur at iaculis a, vehicula sit amet lorem.
                            </Text>
                        </View>
                    </ScrollView>
                </PopupDialog>
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
        justifyContent: 'center',
    },
    items: {
        padding: 10,
        paddingTop: 10,
        color: 'white',
        fontSize: 18,
    },
    footer: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 20,
    }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './app/modules/Login';
import Home from './app/modules/Home';
import Flatlist from './app/modules/Flatlist';
import Camera from './app/modules/Camera';

const App = StackNavigator (
  {
    Login: { screen: Login, },
    Home: { screen: Home },
    Flatlist: { screen: Flatlist },
    Camera: { screen: Camera }
  },
);

export default App;
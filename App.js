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

const App = StackNavigator (
  {
    Login: { screen: Login, },
    Home: { screen: Home }
  },
);

export default App;
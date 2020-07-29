/* eslint-disable */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from './src/navigation/HomeStack'

const App: () => React$Node = () => {

    return (
    <>
      <NavigationContainer>
        <HomeStack/>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {

  },
});

export default App;

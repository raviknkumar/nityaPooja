/* eslint-disable */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';

import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/Main';
import LanguageContextProvider from './src/context/LanguageContext';

const App: () => React$Node = () => {

    return (
    <>
      <NavigationContainer>
          <LanguageContextProvider>
            <Main/>
          </LanguageContextProvider>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {

  },
});

export default App;

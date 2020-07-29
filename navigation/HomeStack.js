/* eslint-disable */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../screens/Home';
import NityaPooja from '../screens/NityaPooja';

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#621FF7',
                },
                headerTintColor: '#fff',
                headerTitleStyle :{
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Home', }}
            />
            <Stack.Screen
                name="NityaPooja"
                component={NityaPooja}
                options={{ title: 'Nitya Pooja', headerShown: false }}
            />
        </Stack.Navigator>
    );
}

/*import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NityaPooja from '../screens/NityaPooja';

const Stack = createStackNavigator();

function HomeStack() {
    return(
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#621FF7',
                },
                headerTintColor: '#fff',
                headerTitleStyle :{
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Home' }}
            />
            <Stack.Screen
                name="NityaPooja"
                component={NityaPooja}
                options={{ title: 'Nitya Pooja' }}
            />
        </Stack.Navigator>
    );
}*/

export default HomeStack;

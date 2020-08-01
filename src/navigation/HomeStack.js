/* eslint-disable */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import NityaPooja from '../screens/NityaPooja';
import Settings from '../screens/Settings';
import Layout from '../screens/Layout';

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
                options={{ title: 'Home' }}
            />
            <Stack.Screen
                name="NityaPooja"
                component={NityaPooja}
                options={{ title: 'Nitya Pooja', headerShown: false }}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;

/* eslint-disable */

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert, Dimensions, StatusBar} from 'react-native';
import {primary_background} from '../../resources/Constants';
import {nityaPooja} from '../../resources/StringConstants';

const width = Dimensions.get('screen').width;

const Home = ({navigation}) => {

    const navigateToNityaPooja = () => {
        navigation.navigate('NityaPooja');
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={primary_background} barStyle="light-content"/>

            <TouchableOpacity
                style={{width: '100%', height: 50, ...styles.card,}}  onPress={()=>{navigateToNityaPooja()}}>
                <Text style={{fontSize:20, fontWeight: '700'}}>
                    {nityaPooja}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:10,
    },
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 10,
        marginVertical: 6,
        padding:2,
        alignItems:'center', justifyContent:'center',
    },
});

export default Home;

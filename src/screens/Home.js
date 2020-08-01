/* eslint-disable */

import React, {useContext, useEffect} from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {primary_background} from '../../resources/Constants';
import {nityaPooja} from '../../resources/StringConstants';
import I18n, {strings} from '../../locales/i18n';
import {LanguageContext} from '../context/LanguageContext';

const width = Dimensions.get('screen').width;

const Home = ({navigation}) => {

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const navigateToNityaPooja = () => {
        navigation.navigate('NityaPooja');
    };

    useEffect(() => {
        const focusListener = navigation.addListener('focus', () => {
            // Call any action
            forceUpdate()
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return focusListener;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={primary_background} barStyle="light-content"/>

            <TouchableOpacity
                style={{width: '100%', height: 50, ...styles.card,}}  onPress={()=>{navigateToNityaPooja()}}>
                <Text style={{fontSize:20, fontWeight: '700'}}>
                    {strings('nityaPooja.title')}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{width: '100%', height: 50, ...styles.card,}}
                onPress={()=>{navigation.navigate('Settings')}}
            >
                <Text style={{fontSize:20, fontWeight: '700'}}>
                    {I18n.t(['settings'])}
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

import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';

const Loading = (props) => {
    return (
        <View style={styles.container}>
            <View style={{display:'flex', flexDirection:'row', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#0000ff" style={{marginRight:10}}/>
                <Text style={{fontSize:18, fontWeight: '500'}}>Loading...</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center'
    },
});

export default Loading;

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {strings} from '../../locales/i18n';

const SignUp = (props) => {
    return (
        <View style={styles.container}>
            <Text>SignUp</Text>
            <Text>{strings('signUp.message')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default SignUp;


import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

import {setLanguage, strings} from '../../locales/i18n';
import {AsyncStorage} from 'react-native'

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Daniel',
            loading: true
        };
    }

    async loadResources() {
        console.log("Loading Resources");
        let lang = await AsyncStorage.getItem('lang');
        lang = 'te';
        if (lang) {
            console.log("Setting Local Language");
            setLanguage(lang);
        }
        this.setState({loading: false})
    }

    async componentDidMount(): void {
        await this.loadResources();
    }

    render() {
        if (this.state.loading) {
            return <View>
                <Text> Loading ... </Text>
            </View>;
        } else {
            return (
                <View>
                    <Text>{strings('login.welcome', {name: this.state.username})}</Text>
                    <Button title={strings('login.login_button')}></Button>
                    <Button title={strings('login.singup_button')} onPress={()=> {this.props.navigation.navigate('signUp')}}></Button>
                </View>
            );
        }
    }
}

export default LoginScreen;

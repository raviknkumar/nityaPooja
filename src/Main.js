import React, {useEffect, useContext, useState} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import HomeStack from './navigation/HomeStack';
import {LanguageContext} from './context/LanguageContext';
import I18n from '../locales/i18n';
import Loading from './components/Loading';

const Main = (props) => {

    let {getLanguage} = useContext(LanguageContext);
    let [loading, setLoading] = useState(true);

    useEffect( () => {

        (async () => {
            let lang='';
            try {
                lang = await getLanguage();
                I18n.locale = lang;
            } catch (e) {
                console.log("Error In Fetching GameData: ", e);
            }
            setLoading(false);
        })();

    }, []);

    if(loading){
        return <Loading/>
    }
    else {
        return (
            <HomeStack/>
        );
    }
};

const styles = StyleSheet.create({
    container: {},
});

export default Main;

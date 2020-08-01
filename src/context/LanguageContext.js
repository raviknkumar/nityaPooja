import React, {createContext, useState} from "react";
import AsyncStorage from '@react-native-community/async-storage';
import {getDeviceLang, setLanguage} from '../../locales/i18n';

export const LanguageContext = createContext();

// Store Data as GAME_LEVEL wise
const LanguageContextProvider = (props) => {

    let [state, setState] = useState({
        lang: null
    });

    let [lang,setLang] = useState(null);

    const changeLanguage = async (newLang) => {
        try {
            setLang(newLang);
            await AsyncStorage.setItem('lang', newLang);
            setLanguage(newLang);
        } catch (e) {
            console.log("Got Error In Changing Language");
            console.warn(e);
        }
    };

    const getLanguage = async () => {

        let {lang} = state;

        console.log("State Lang is ", lang);

        if (lang) {
            return lang;
        }

        let key= 'lang';
        try{
             lang = await AsyncStorage.getItem(key);
            if(lang){
                return lang;
            } else {
                return getDeviceLang();
            }
        } catch (e) {
            console.log("Error in Getting Sound", e);
        }
    };

    return (
        <LanguageContext.Provider value={{
            changeLanguage: changeLanguage,
            getLanguage: getLanguage,
            state: state,
            lang: lang
        }}>
            {props.children}
        </LanguageContext.Provider>
    );
};


export default LanguageContextProvider;

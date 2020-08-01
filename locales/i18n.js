import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from '../locales/en';
import te from '../locales/te';
import kn from '../locales/kn';
import hi from '../locales/hi';
import { Platform, NativeModules } from 'react-native'


// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
    en,
    te,
    kn,
    hi
};

const currentLocale = I18n.currentLocale();

// Is it a RTL language?
export const isRTL = currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
    return I18n.t(name, params);
};

export function getDeviceLang() {

    const deviceLanguage = Platform.OS === 'ios' ?
            NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
            : NativeModules.I18nManager.localeIdentifier;

    return deviceLanguage;
}

export function setLanguage(lang) {
    console.log("Update Language to ", lang);
    I18n.locale = lang;
}

export default I18n;

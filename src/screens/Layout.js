import React from 'react';
import {AsyncStorage, Button, StyleSheet, Text, View} from 'react-native';
import {setLanguage, strings} from '../../locales/i18n';
import DropDownPicker from 'react-native-dropdown-picker';
import RNRestart from 'react-native-restart';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Layout = (props) => {

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const changeLanguage = async (newLang) => {
        console.log("Change Lang to ", newLang);
        const lang = await AsyncStorage.getItem('lang');
        await AsyncStorage.setItem('lang', newLang);
        setLanguage(newLang);
        forceUpdate();
        // RNRestart.Restart();
    };

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={{display: 'flex', flexDirection:'row', alignItems:'center'}}>
                    <FeatherIcon name="arrow-left" size={20} color="#fff"/>
                    <View style={{marginLeft:15}}>
                        <Text style={{color: 'white', fontSize:20, fontWeight: '700'}}>
                            Settings
                        </Text>
                        <Text style={{color: 'white', fontSize:14, fontWeight: '400', marginTop:5}}>
                            Change account settings and personalize your app as your wish!
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.bodyContainer}>

                <View style={styles.rowItem}>
                    <Text>Language</Text>
                    <View style={{flex:.8, alignSelf:'stretch'}}>
                        <DropDownPicker
                            placeholder="Select Language"
                            items={[
                                {
                                    label: 'తెలుగు', value: 'te',
                                    icon: () => <Text style={styles.icon}>తె</Text>,
                                },
                                {
                                    label: 'ಕನ್ನಡ', value: 'kn',
                                    icon: () => <Text style={styles.icon}>ಕ</Text>,
                                },
                                {
                                    label: 'हिन्दी', value: 'hi',
                                    icon: () => <Text style={styles.icon}>हि</Text>,
                                },
                            ]}
                            containerStyle={{height: 40}}
                            style={{backgroundColor: '#fafafa'}}
                            itemStyle={{
                                justifyContent: 'flex-start', zIndex: 1000, elevation: 1000,
                            }}
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => changeLanguage(item.value)}
                        />
                    </View>
                </View>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display:'flex',
        flexDirection:'column',
        backgroundColor: '#53B86C'
    },
    header: {
        padding:10,
        marginBottom:10,
    },
    bodyContainer: {
        flex:1,
        backgroundColor: 'white',
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        paddingTop: 30,
        paddingHorizontal: 4
    },
    icon:{
        backgroundColor:'royalblue',
        width:30,
        height:30,
        borderRadius:15,
        color:'white',
        padding:4,
        fontWeight: '700',
        fontSize:20,
        textAlign: 'center',
        marginRight:10
    },
    rowItem: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginHorizontal:4,
        marginVertical:6
    }
});

export default Layout;

//{strings('signUp.message')}

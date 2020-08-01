/* eslint-disable */

import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Platform,
    StatusBar,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import {nityaPoojaSlokas} from '../../resources/StringConstants';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated from "react-native-reanimated";
import Sloka from '../components/Sloka';


const screenHeight = Dimensions.get("screen").height;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const NityaPooja = (props) => {

    let [data,setData] = useState(nityaPoojaSlokas);
    let [fontSize, setFontSize] = useState(20);
    let [headerFontSize, setHeaderFontSize] = useState(30);
    let [selected, setSelected] = useState('-1');

    let flatListRef = React.createRef();

    const increaseFontSize = () => {
        setFontSize(fontSize+2);
        setHeaderFontSize(headerFontSize+2);
    };

    const decreaseFontSize = () => {
        setFontSize(fontSize-2);
        setHeaderFontSize(headerFontSize-2);
    };

    const selectItem = itemSelected => {
        let selectedIndex = parseInt(selected);

        // reset prevSelected
        if(selectedIndex !== -1)
            data[selectedIndex-1].style=null;

        // set currentSelected
        setSelected(itemSelected.key.toString());

        //apply styles
        data[itemSelected.key-1].style = styles.selectedItemStyle;
    };

    const scrollY = new Animated.Value(0);
    const HEADER_HEIGHT = Platform.OS === 'ios' ? 80 : 50 + StatusBar.currentHeight;

    const diffClampAnimatedY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);

    const headerY = Animated.interpolate(diffClampAnimatedY, {
        inputRange:[0,HEADER_HEIGHT],
        outputRange:[0, -HEADER_HEIGHT],
    });

    return (
        <SafeAreaView style={styles.container}>

            <Animated.View style={{
                position:'absolute',
                marginTop: Platform.OS === 'ios' ? 0 :StatusBar.currentHeight,
                left:0,
                right:0,
                top:0, backgroundColor:'#eee',
                flexDirection:'row',alignItems:'center', justifyContent:'space-around', height:HEADER_HEIGHT,
                zIndex:1000,
                elevation:1000,
                transform: [{translateY: headerY}]
            }}>

                <TouchableOpacity style={{width: 50, backgroundColor: 'purple', alignSelf:'center'}}
                                  onPress={increaseFontSize}>
                    <Text style={{color: 'white', textAlign: 'center',  padding:5}}>
                        <Icon name="plus" size={20} color="#fff" />
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width: 50, backgroundColor: 'purple'}} onPress={decreaseFontSize}>
                    <Text style={{color: 'white', fontWeight: '700', textAlign: 'center', padding:5}}>
                        <Icon name="minus" size={20} color="#fff" />
                    </Text>
                </TouchableOpacity>

            </Animated.View>

            <View style={{paddingHorizontal: 10}}>

                <View style={{paddingTop: 10}}>

                    <AnimatedFlatList
                        scrollEventThrottle={16}
                        style={{paddingTop: HEADER_HEIGHT}}
                        bounce={false}
                        onScroll={Animated.event(
                            [
                                { nativeEvent: { contentOffset: { y: scrollY } } }
                            ]
                        )}
                        contentContainerStyle={{ paddingBottom: 100}}
                              data={data}
                              keyExtractor={item => item.key.toString()}
                              renderItem={({item, index}) => (
                                    <Sloka
                                        item={item}
                                        index={index}
                                        selectItem={selectItem}
                                        fontSize={fontSize}
                                        headerFontSize={headerFontSize}/>
                                  )}/>

                    <View style={{ height: 0, marginBottom: 1 }}/>

                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    headerStyle: {
        /*backgroundColor:'royalblue',
        color:'white',*/
        fontWeight: '700',
        textAlign: 'center',
        marginVertical: 4,
    },
    selectedItemStyle:{
        color:'royalblue'
    }
});

export default NityaPooja;

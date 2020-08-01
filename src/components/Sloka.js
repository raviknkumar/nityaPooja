/*eslint-disable*/

import React, {Component, PureComponent} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import I18n from '../../locales/i18n';


class Sloka extends Component {

    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {

        let newStyle = nextProps.item.style;
        let newHeaderFontSize = nextProps.headerFontSize;
        let newFontSize = nextProps.fontSize;

        const {style, headerFontSize, fontSize} = this.props;

        return newStyle !== style || newHeaderFontSize !== headerFontSize || newFontSize !== fontSize;
    }


    render() {

        return (
            <TouchableOpacity onPress={() => {
                this.props.selectItem(this.props.item);
            }}>
                <Text style={{
                    fontSize: this.props.headerFontSize,
                    ...styles.headerStyle,
                }}>
                    {I18n.t(['nityaPooja', `slokas.${this.props.index}`, 'header'])}
                </Text>
                <Text style={{fontSize: this.props.fontSize, ...this.props.item.style}}>
                    {I18n.t(['nityaPooja', `slokas.${this.props.index}`, 'sloka'])}
                </Text>
            </TouchableOpacity>
        );
    }
}

Sloka.propTypes = {};

const styles = StyleSheet.create({
    headerStyle: {
        // backgroundColor:'orange',
        // color:'white',
        fontWeight: '700',
        textAlign: 'center',
        marginVertical: 4,
    },
});

export default Sloka;

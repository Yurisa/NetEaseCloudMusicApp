/**
 * 
 * 头像组件
 */
import React, { PureComponent } from 'react';
import { Image, StyleSheet } from 'react-native';

class Avatar extends PureComponent {
    render() {
        const { img = require('../imgs/img/18894007811887644.jpg'), size } = this.props;
        const styleR = size ? {height: size, width: size, borderRadius: size / 2} : {};
        return (
            <Image
                source={img}
                style={[styles.avatar, styleR]}
            />
        )
    }
}

const styles = StyleSheet.create({
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 30,

    }
});

export default Avatar;
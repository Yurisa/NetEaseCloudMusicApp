
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tip } from './TextTool';

export default ({icon, color = '#000000', title}) => (
    <View style={{alignItems: 'center'}}>
        <Icon name={icon} size={25} color={color} />
        <Tip color={color}>{title}</Tip>
    </View>
)
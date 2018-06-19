
import React from 'react';
import { Text } from 'react-native';

export default ListFooter = ({text = '我是有底线的'}) => (
    <Text style={{textAlign: 'center', padding: 10, transform: [{scale: 0.857143}]}}>----{text}----</Text>
);
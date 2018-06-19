/**
 * 垂直分割线
 *
 */
import React from 'react';
import { View } from 'react-native';
import { screen, color } from '../utils';

export default VerticalSeparator = ({height = 20}) => (
    <View style={{width: screen.onePixel, height, backgroundColor: color.border}} />
)